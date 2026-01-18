import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Route } from "@/types";
import { adminRoutes } from "@/routes/adminRoute";
import { UserRoute } from "@/routes/userRoute";
import Link from "next/link";
import { homeRoute } from "@/routes/homeRoute";

// This is sample data.

export function RoleSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let rolesRoutes: Route[] = [];

  switch (user.role) {
    case "admin":
      rolesRoutes = adminRoutes;
      break;
    case "user":
      rolesRoutes = UserRoute;
      break;
    default:
      rolesRoutes = [];
      break;
  }

  const routes: Route[] = [homeRoute, ...rolesRoutes];

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
