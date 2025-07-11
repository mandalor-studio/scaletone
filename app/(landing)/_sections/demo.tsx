"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IconTrendingUp,
  IconDashboard,
  IconChartBar,
  IconUsers,
  IconInnerShadowTop,
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const demoData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Eva Wild",
    email: "eva@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 6,
    name: "Jo Rabbitt",
    email: "jo@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 7,
    name: "Michael Chen",
    email: "michael@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 8,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 9,
    name: "David Kim",
    email: "david@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    email: "olivia@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 11,
    name: "Alex Thompson",
    email: "alex@example.com",
    role: "Editor",
    status: "Inactive",
  },
];

export function DemoSection() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="py-16 space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="outline" className="px-4 py-2">
          ✨ Live Demo
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          See Your Themes in Action
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch how your custom themes transform different interfaces with
          perfect consistency
        </p>
      </div>

      {/* Demo Carousel */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="table">Data Table</TabsTrigger>
          <TabsTrigger value="login">Login Form</TabsTrigger>
        </TabsList>

        {/* Dashboard Demo */}
        <TabsContent value="dashboard" className="space-y-4">
          <div className="relative">
            {/* Browser Frame */}
            <div className="bg-border rounded-t-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 bg-muted rounded px-3 py-1 text-xs text-muted-foreground">
                  dashboard.example.com
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="bg-background border border-t-0 rounded-b-lg overflow-hidden">
              <div className="flex min-h-[600px]">
                {/* Sidebar */}
                <div className="w-56 bg-sidebar border-r border-border flex flex-col">
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <IconInnerShadowTop className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-semibold">Acme Inc.</span>
                    </div>
                  </div>
                  <div className="flex-1 p-4 space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-foreground">
                      <IconDashboard className="h-4 w-4" />
                      <span className="text-sm font-medium">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                      <IconChartBar className="h-4 w-4" />
                      <span className="text-sm">Analytics</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                      <IconUsers className="h-4 w-4" />
                      <span className="text-sm">Team</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-t from-primary/5 to-card">
                      <CardHeader className="pb-3">
                        <CardDescription>Total Revenue</CardDescription>
                        <CardTitle className="text-xl font-semibold">
                          $1,250.00
                        </CardTitle>
                        <Badge variant="outline" className="text-xs w-fit">
                          <IconTrendingUp className="h-3 w-3 mr-1" />
                          +12.5%
                        </Badge>
                      </CardHeader>
                    </Card>
                    <Card className="bg-gradient-to-t from-primary/5 to-card">
                      <CardHeader className="pb-3">
                        <CardDescription>New Users</CardDescription>
                        <CardTitle className="text-xl font-semibold">
                          1,234
                        </CardTitle>
                        <Badge variant="outline" className="text-xs w-fit">
                          <IconTrendingUp className="h-3 w-3 mr-1" />
                          +8.2%
                        </Badge>
                      </CardHeader>
                    </Card>
                    <Card className="bg-gradient-to-t from-primary/5 to-card">
                      <CardHeader className="pb-3">
                        <CardDescription>Active Sessions</CardDescription>
                        <CardTitle className="text-xl font-semibold">
                          892
                        </CardTitle>
                        <Badge variant="outline" className="text-xs w-fit">
                          <IconTrendingUp className="h-3 w-3 mr-1" />
                          +5.1%
                        </Badge>
                      </CardHeader>
                    </Card>
                  </div>

                  {/* Chart */}
                  <div className="mt-6">
                    <ChartAreaInteractive />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Data Table Demo */}
        <TabsContent value="table" className="space-y-4">
          <div className="relative">
            <div className="bg-border rounded-t-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 bg-muted rounded px-3 py-1 text-xs text-muted-foreground">
                  admin.example.com/users
                </div>
              </div>
            </div>

            <div className="bg-background border border-t-0 rounded-b-lg min-h-[600px] p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">User Management</h3>
                  <Button>Add User</Button>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox />
                          </TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {demoData.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <Checkbox />
                            </TableCell>
                            <TableCell className="font-medium">
                              {user.name}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{user.role}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  user.status === "Active"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {user.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Login Form Demo */}
        <TabsContent value="login" className="space-y-4">
          <div className="relative">
            <div className="bg-border rounded-t-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 bg-muted rounded px-3 py-1 text-xs text-muted-foreground">
                  auth.example.com/login
                </div>
              </div>
            </div>

            <div className="bg-background border border-t-0 rounded-b-lg min-h-[600px] p-6">
              <div className="flex items-center justify-center min-h-[500px]">
                <Card className="w-full max-w-md">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconInnerShadowTop className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>
                      Enter your credentials to access your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <IconMail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          placeholder="john@example.com"
                          className="pl-10"
                          defaultValue="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <IconLock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 pr-10"
                          defaultValue="password123"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <IconEyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <IconEye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full">Sign In</Button>
                    <div className="text-center text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Button variant="link" className="p-0 h-auto">
                        Sign up
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Info overlay */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          🎨 All interfaces automatically adapt to your selected theme colors
        </p>
      </div>
    </section>
  );
}
