import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { ArrowUp } from "lucide-react";

export function BentoGrid() {
  return (
    <div className="container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 max-w-6xl mx-auto pt-4 pb-12">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>💰 Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">$1000</div>
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>💰 Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">$1000</div>
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-6">
        {" "}
        {/* Cette carte est plus large */}
        <CardHeader>
          <CardTitle>💰 Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">$1000</div>
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
      <Card className="lg:col-span-9">
        <CardHeader>
          <CardTitle>💰 Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">$1000</div>
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>💰 Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">$1000</div>
            <ArrowUp className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>

      {/* Tu peux continuer ici */}
    </div>
  );
}
