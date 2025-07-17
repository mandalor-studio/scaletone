export function Logo() {
  return (
    <div className="flex flex-col border-l-8 pl-4 border-primary">
      <span className="font-bold">Scaletone</span>
      <div className="text-xs text-muted-foreground hidden md:flex flex-col">
        <span>shadcn/radix colors</span>
        <span>theme generator</span>
      </div>
    </div>
  );
}
