import { DataTableDemo } from "./components/data-table-demo";

export function BentoGrid() {
  return (
    <div className="container px-4 grid grid-cols-12 gap-4 lg:gap-6 max-w-6xl mx-auto pt-4 pb-12">
      <DataTableDemo />
    </div>
  );
}
