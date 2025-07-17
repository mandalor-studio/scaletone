import { NextResponse } from "next/server";

interface MailchimpRequest {
  name: string;
  email: string;
  message: string;
}

interface MailchimpMember {
  email_address: string;
  status: string;
  merge_fields: {
    FNAME: string;
    MESSAGE: string;
  };
}

export async function POST(request: Request) {
  try {
    const body: MailchimpRequest = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Get environment variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX || "us1";

    if (!API_KEY || !LIST_ID) {
      console.error("Mailchimp configuration missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare member data
    const memberData: MailchimpMember = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        MESSAGE: message,
      },
    };

    // Make request to Mailchimp API
    const response = await fetch(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        },
        body: JSON.stringify(memberData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      
      // Handle duplicate email (user already subscribed)
      if (errorData.title === "Member Exists") {
        return NextResponse.json(
          { 
            success: true, 
            message: "Thank you! Your message has been received. You're already subscribed to our updates." 
          },
          { status: 200 }
        );
      }

      console.error("Mailchimp API error:", errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    const result = await response.json();
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your message has been received and you've been subscribed to our updates." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}