import { AnalyticsChart } from "./components/analytics-chart";
import { DataTableDemo } from "./components/data-table-demo";
import { MetricsDashboard } from "./components/metrics-dashboard";
import { NotificationsFeed } from "./components/notifications-feed";
import { PaymentForm } from "./components/payment-form";
import { SettingsPanel } from "./components/settings-panel";
import { UserProfile } from "./components/user-profile";

export function BentoGrid() {
  return (
    <div className="container px-4 grid grid-cols-12 gap-4 lg:gap-6 max-w-6xl mx-auto pt-4 pb-12">
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <UserProfile />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <SettingsPanel />
      </div>
      <div className="hidden lg:block col-span-4">
        <PaymentForm />
      </div>
      <div className="col-span-12 lg:col-span-8 order-3 lg:order-none">
        <MetricsDashboard />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 order-1 lg:order-none">
        <AnalyticsChart />
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 order-2 lg:order-none">
        <NotificationsFeed />
      </div>
      <div className="hidden md:block col-span-12 lg:col-span-8">
        <DataTableDemo />
      </div>
    </div>
  );
}
