"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, AlertCircle, Info, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Payment successful",
    message: "Your subscription has been renewed",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    type: "warning",
    title: "Storage almost full",
    message: "85% of your storage is being used",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "New feature available",
    message: "Check out our latest dashboard updates",
    time: "3 hours ago",
    read: true,
  },
];

export function NotificationsFeed() {
  const [items, setItems] = React.useState(notifications);
  const unreadCount = items.filter((item) => !item.read).length;

  const markAsRead = (id: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  };

  const removeNotification = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "info":
        return <Info className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bell className="h-5 w-5" />
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-xs">
            Mark all read
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-100 overflow-y-auto">
          {items.map((notification) => (
            <div
              key={notification.id}
              className={`relative group p-3 rounded-lg border transition-colors ${
                notification.read
                  ? "bg-muted/30 border-muted"
                  : "bg-background border-border shadow-sm"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{getIcon(notification.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4
                      className={`text-sm font-medium truncate ${
                        notification.read
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {notification.title}
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0 transition-opacity"
                      onClick={() => removeNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <p
                    className={`text-xs mt-1 ${
                      notification.read
                        ? "text-muted-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-6 px-2"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark read
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {!notification.read && (
                <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full" />
              )}
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-8">
            <Bell className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">No notifications</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
