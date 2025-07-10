import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/mode-toggle";
import { ChartPieSeparatorNone } from "@/components/demos/pie-chart";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-lg mx-auto">
      <ModeToggle />
      <Card className="min-w-xs">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>
            Buttons are used to trigger actions in your app.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </CardContent>
      </Card>
      <Card className="min-w-xs">
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>
            Badges are used to show status of an item.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </CardContent>
      </Card>
      <ChartPieSeparatorNone />
    </main>
  );
}
