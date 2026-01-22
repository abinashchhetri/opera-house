import type { DashboardNavGroup } from "./types";

export const DASHBOARD_NAV_GROUPS: DashboardNavGroup[] = [
  {
    id: "content",
    label: "Content",
    items: [
      {
        id: "products",
        label: "Products",
        href: "/dashboard/products",
        icon: "Package",
       
      },
      {
        id: "portfolios",
        label: "Portfolios",
        href: "/dashboard/portfolios",
        icon: "FolderKanban",
      },
      {
        id: "services",
        label: "Services",
        href: "/dashboard/services",
        icon: "Wrench",
      },
    ],
  },
];
