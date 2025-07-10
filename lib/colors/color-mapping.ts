export type ShadcnColorVar =
  | "background"
  | "card"
  | "popover"
  | "sidebar-accent"
  | "muted"
  | "secondary"
  | "sidebar"
  | "accent"
  | "primary-foreground"
  | "sidebar-primary-foreground"
  | "border"
  | "input"
  | "sidebar-border"
  | "ring"
  | "sidebar-ring"
  | "muted-foreground"
  | "foreground"
  | "card-foreground"
  | "popover-foreground"
  | "sidebar-foreground"
  | "secondary-foreground"
  | "accent-foreground"
  | "primary"
  | "sidebar-primary"
  | "sidebar-accent-foreground"
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5";

export type Mode = "light" | "dark";

export type MappingEntry = {
  token: ShadcnColorVar;
  scale: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  variant: "solid" | "alpha";
  comment: string;
};

export const lightMap: MappingEntry[] = [
  { token: "background", scale: 1, variant: "solid", comment: "radix 1" },
  { token: "card", scale: 1, variant: "solid", comment: "radix 1" },
  { token: "popover", scale: 1, variant: "solid", comment: "radix 1" },
  { token: "sidebar-accent", scale: 2, variant: "solid", comment: "radix 2" },
  { token: "muted", scale: 2, variant: "solid", comment: "radix 2" },
  { token: "secondary", scale: 3, variant: "solid", comment: "radix 3" },
  { token: "sidebar", scale: 3, variant: "solid", comment: "radix 3" },
  {
    token: "primary-foreground",
    scale: 3,
    variant: "solid",
    comment: "radix 3",
  },
  {
    token: "sidebar-primary-foreground",
    scale: 3,
    variant: "solid",
    comment: "radix 3",
  },
  { token: "accent", scale: 3, variant: "solid", comment: "radix 3" },
  { token: "border", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "input", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "sidebar-border", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "sidebar-ring", scale: 8, variant: "solid", comment: "radix 8" },
  { token: "ring", scale: 8, variant: "solid", comment: "radix 8" },
  {
    token: "muted-foreground",
    scale: 11,
    variant: "solid",
    comment: "radix 11",
  },
  {
    token: "secondary-foreground",
    scale: 12,
    variant: "alpha",
    comment: "radix 12 A",
  },
  {
    token: "accent-foreground",
    scale: 12,
    variant: "alpha",
    comment: "radix 12 A",
  },
  { token: "primary", scale: 12, variant: "alpha", comment: "radix 12 A" },
  {
    token: "sidebar-primary",
    scale: 12,
    variant: "alpha",
    comment: "radix 12 A",
  },
  {
    token: "sidebar-accent-foreground",
    scale: 12,
    variant: "alpha",
    comment: "radix 12 A",
  },
  { token: "foreground", scale: 12, variant: "solid", comment: "radix 12" },
  {
    token: "card-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "popover-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "sidebar-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  { token: "chart-1", scale: 9, variant: "solid", comment: "radix 9" },
  { token: "chart-2", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "chart-3", scale: 3, variant: "solid", comment: "radix 3" },
  { token: "chart-4", scale: 5, variant: "solid", comment: "radix 5" },
  { token: "chart-5", scale: 12, variant: "solid", comment: "radix 12" },
];

export const darkMap: MappingEntry[] = [
  { token: "background", scale: 1, variant: "solid", comment: "radix 1" },
  { token: "card", scale: 2, variant: "solid", comment: "radix 2" },
  { token: "popover", scale: 2, variant: "solid", comment: "radix 2" },
  {
    token: "primary-foreground",
    scale: 2,
    variant: "solid",
    comment: "radix 2",
  },
  { token: "sidebar", scale: 2, variant: "solid", comment: "radix 2" },
  { token: "sidebar-accent", scale: 4, variant: "solid", comment: "radix 4" },
  { token: "secondary", scale: 4, variant: "solid", comment: "radix 4" },
  { token: "muted", scale: 4, variant: "solid", comment: "radix 4" },
  { token: "accent", scale: 4, variant: "solid", comment: "radix 4" },
  { token: "border", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "sidebar-border", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "input", scale: 7, variant: "alpha", comment: "radix 7 A" },
  { token: "ring", scale: 9, variant: "solid", comment: "radix 9" },
  { token: "sidebar-ring", scale: 9, variant: "solid", comment: "radix 9" },
  { token: "sidebar-primary", scale: 9, variant: "solid", comment: "radix 9" },
  {
    token: "muted-foreground",
    scale: 11,
    variant: "solid",
    comment: "radix 11",
  },
  { token: "primary", scale: 12, variant: "alpha", comment: "radix 12 A" },
  { token: "foreground", scale: 12, variant: "solid", comment: "radix 12" },
  {
    token: "card-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "popover-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "secondary-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "accent-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "sidebar-primary-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "sidebar-accent-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  {
    token: "sidebar-foreground",
    scale: 12,
    variant: "solid",
    comment: "radix 12",
  },
  { token: "chart-1", scale: 9, variant: "solid", comment: "radix 9" },
  { token: "chart-2", scale: 7, variant: "solid", comment: "radix 7" },
  { token: "chart-3", scale: 3, variant: "solid", comment: "radix 3" },
  { token: "chart-4", scale: 5, variant: "solid", comment: "radix 5" },
  { token: "chart-5", scale: 12, variant: "solid", comment: "radix 12" },
];
