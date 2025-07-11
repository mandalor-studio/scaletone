"use client";

import { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowUpDown, MoreHorizontal, CreditCard } from "lucide-react";

const invoices = [
  { invoice: "INV001", customer: "Eva Co.", amount: "$250.00", status: "Paid" },
  {
    invoice: "INV002",
    customer: "Jo Inc.",
    amount: "$150.00",
    status: "Pending",
  },
  {
    invoice: "INV003",
    customer: "Solopreneur Ltd.",
    amount: "$350.00",
    status: "Paid",
  },
  {
    invoice: "INV004",
    customer: "Small Biz LLC",
    amount: "$450.00",
    status: "Overdue",
  },
  {
    invoice: "INV005",
    customer: "Startup Ventures",
    amount: "$550.00",
    status: "Pending",
  },
];

export function ComponentShowcaseGrid() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6">
      {/* Social Media Scheduler */}
      <Card className="w-full break-inside-avoid">
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
          <CardDescription>
            Draft and schedule your next social media post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Textarea placeholder="What's on your mind?" />
            <div className="flex items-center">
              <Label htmlFor="socials" className="sr-only">
                Social Platforms
              </Label>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>IG</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost">Save Draft</Button>
          <Button>Schedule Post</Button>
        </CardFooter>
      </Card>

      {/* Project Tasks */}
      <Card className="w-full break-inside-avoid">
        <CardHeader>
          <CardTitle>Project Phoenix</CardTitle>
          <CardDescription>
            Tasks remaining for the current sprint.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="task1" defaultChecked />
            <Label htmlFor="task1" className="font-medium">
              Deploy to production
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="task2" />
            <Label htmlFor="task2" className="font-medium">
              Run final tests
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="task3" />
            <Label htmlFor="task3" className="font-medium">
              Update documentation
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="task4" defaultChecked />
            <Label htmlFor="task4" className="font-medium">
              Design new feature
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Progress value={50} className="w-full" />
            <p className="text-sm text-muted-foreground mt-2">50% complete</p>
          </div>
        </CardFooter>
      </Card>

      {/* Date Range Picker Card */}
      <Card className="w-full break-inside-avoid">
        <CardHeader>
          <CardTitle>Booking Dates</CardTitle>
          <CardDescription>Select your desired date range.</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="range"
            numberOfMonths={1}
            selected={dateRange}
            onSelect={setDateRange}
            className="p-0"
          />
        </CardContent>
      </Card>

      {/* Full-width Data Table */}
      <Card className="w-full break-inside-avoid col-span-full">
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>A list of your recent invoices.</CardDescription>
          <div className="pt-4">
            <Input placeholder="Filter invoices..." />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost">
                    Invoice <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost">
                    Customer <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost">
                    Status <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((item) => (
                <TableRow key={item.invoice}>
                  <TableCell className="font-medium">{item.invoice}</TableCell>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Paid"
                          ? "default"
                          : item.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className="capitalize"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{item.amount}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Download PDF</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 5 of 20 invoices
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>

      {/* Payment Details Card */}
      <Card className="w-full break-inside-avoid">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
          <CardDescription>
            Enter your card information to complete the purchase.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="card-name">Name on card</Label>
            <Input id="card-name" placeholder="Eva & Jo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-number">Card number</Label>
            <div className="relative">
              <Input id="card-number" placeholder="•••• •••• •••• ••••" />
              <CreditCard className="absolute top-1/2 -translate-y-1/2 right-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expires</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP</Label>
              <Input id="zip" placeholder="12345" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Pay $550.00</Button>
        </CardFooter>
      </Card>

      {/* Team Members Card */}
      <Card className="w-full break-inside-avoid">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team and their roles.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/eva.png" />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Eva</p>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/jo.png" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jo</p>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Alex</p>
                <p className="text-sm text-muted-foreground">Developer</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
