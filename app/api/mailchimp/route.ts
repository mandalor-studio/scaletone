import { NextResponse } from "next/server";
import { Resend } from "resend";

interface MailchimpRequest {
  name: string;
  email: string;
  message?: string;
}

interface MailchimpMember {
  email_address: string;
  status: string;
  merge_fields: {
    FNAME: string;
  };
}

export async function POST(request: Request) {
  try {
    const body: MailchimpRequest = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Validate field lengths (Mailchimp limits)
    if (name.length > 50) {
      return NextResponse.json(
        { error: "Name must be less than 50 characters" },
        { status: 400 },
      );
    }

    if (message && message.length > 255) {
      return NextResponse.json(
        { error: "Message must be less than 255 characters" },
        { status: 400 },
      );
    }

    // Get environment variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || "us1";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

    if (!API_KEY || !LIST_ID) {
      console.error("Mailchimp configuration missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    if (!RESEND_API_KEY || !CONTACT_EMAIL) {
      console.error("Resend configuration missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Prepare member data
    const memberData: MailchimpMember = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
      },
    };

    // Make request to Mailchimp API
    const response = await fetch(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString(
            "base64",
          )}`,
        },
        body: JSON.stringify(memberData),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();

      // Handle duplicate email (user already subscribed)
      if (errorData.title === "Member Exists") {
        // Don't return here - continue to send email
      } else {
        console.error("Mailchimp API error:", errorData);
        return NextResponse.json(
          { error: "Failed to subscribe. Please try again." },
          { status: 500 },
        );
      }
    }

    // Send email notification if message is provided
    if (message && message.trim()) {
      try {
        const resend = new Resend(RESEND_API_KEY);

        await resend.emails.send({
          from: "noreply@evaandjo.com",
          to: [CONTACT_EMAIL],
          subject: `New contact message from ${name}`,
          html: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails, user is still subscribed
      }
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received and you've been subscribed to our updates.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
