"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, Mail, Phone, Edit } from "lucide-react";

export function UserProfile() {
  const completionPercentage = 85;

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Joined March 2023</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Profile Completion</span>
            <span className="text-sm text-muted-foreground">
              {completionPercentage}%
            </span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium">Skills</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              UI/UX Design
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Figma
            </Badge>
            <Badge variant="secondary" className="text-xs">
              React
            </Badge>
            <Badge variant="secondary" className="text-xs">
              TypeScript
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-3 border-t">
          <div className="text-center">
            <div className="text-lg font-semibold">127</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">1.2k</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">450</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
        </div>

        <div className="pt-2">
          <Button className="w-full" variant="outline" size="sm">
            View Full Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
