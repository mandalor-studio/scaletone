import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSelector } from "@/components/theme-selector";
import { CSSDisplay } from "@/components/css-display";
import { ChartPieSeparatorNone } from "@/components/demos/pie-chart";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-4xl p-4">
      <div className="flex gap-2">
        <ThemeSelector />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
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
        </div>

        <div className="space-y-4">
          <CSSDisplay />
        </div>
      </div>
    </div>
  );
}
