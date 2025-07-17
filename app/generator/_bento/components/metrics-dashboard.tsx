"use client";

import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  Users,
  DollarSign,
  Eye,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "$45,231",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    progress: 75,
    color: "text-primary",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180",
    trend: "up",
    icon: Users,
    progress: 60,
    color: "text-primary",
  },
  {
    title: "Page Views",
    value: "12,234",
    change: "-3.2%",
    trend: "down",
    icon: Eye,
    progress: 45,
    color: "text-destructive",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.5%",
    trend: "up",
    icon: Activity,
    progress: 82,
    color: "text-primary",
  },
];

export function MetricsDashboard() {
  return (
    <Card className="h-full w-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Activity className="h-5 w-5" />
          Performance Metrics
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Real-time overview of your key performance indicators
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon =
              metric.trend === "up" ? ArrowUpIcon : ArrowDownIcon;

            return (
              <div
                key={index}
                className="space-y-3 p-4 rounded-lg border bg-card/50"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <div
                    className={`flex items-center gap-1 text-xs ${metric.color}`}
                  >
                    <TrendIcon className="h-3 w-3" />
                    <span className="font-medium">{metric.change}</span>
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {metric.title}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{metric.progress}%</span>
                  </div>
                  <Progress value={metric.progress} className="h-1.5" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold">98.5%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-lg font-semibold">1.2s</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </div>
            <div>
              <div className="text-lg font-semibold">99.9%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
