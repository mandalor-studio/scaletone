"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Lock } from "lucide-react";

export function PaymentForm() {
  return (
    <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CreditCard className="h-5 w-5" />
          Payment Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="card-number">Card Number</Label>
          <Input
            id="card-number"
            placeholder="1234 5678 9012 3456"
            className="font-mono"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" placeholder="MM/YY" className="font-mono" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="123" className="font-mono" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Cardholder Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>

        <div className="space-y-2">
          <Label>Country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-2">
          <Button className="w-full" size="sm">
            <Lock className="mr-2 h-4 w-4" />
            Pay $29.99
          </Button>
        </div>

        <div className="text-xs text-muted-foreground text-center">
          Your payment information is secure and encrypted
        </div>
      </CardContent>
    </Card>
  );
}
