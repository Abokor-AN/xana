"use client";

import * as React from "react";

import { Button } from "@/components/shadcn-ui/button";

import {
  LayoutDashboard,
  Mail,
  CalendarDays,
  ListTodo,
  Notebook,
  Wallet,
  Users,
  LayoutGrid,
  CircleUserRound,
} from "lucide-react";

import { DesktopSidebar } from "@/components/ui/desktop-sidebar";
import { MobileSidebar } from "@/components/ui/mobile-sidebar";

import { cn } from "@/lib/utils";

export function Sidebar({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-background border rounded-md order-last md:order-first w-full h-20 md:h-full md:w-11",
        className
      )}
      {...props}
    >
      <DesktopSidebar className="hidden md:flex lg:flex xl:flex 2xl:flex"></DesktopSidebar>
      <MobileSidebar className="flex md:hidden lg:hidden xl:hidden 2xl:hidden"></MobileSidebar>
    </div>
  );
}

// items-center justify-center md:items-center md:justify-between
// p-px flex items-center justify-center md:flex-col md:items-start md:justify-start
{
  /* <LayoutDashboard size={20} color="#ffffff" strokeWidth={1.25} absoluteStrokeWidth /><LayoutGrid size={20} strokeWidth={1.25} absoluteStrokeWidth /><Settings size={20} strokeWidth={1.25} absoluteStrokeWidth /><CircleUserRound size={20} strokeWidth={1.25} absoluteStrokeWidth /><Users size={20} strokeWidth={1.25} absoluteStrokeWidth /><Wallet size={20} strokeWidth={1.25} absoluteStrokeWidth /><Notebook size={20} strokeWidth={1.25} absoluteStrokeWidth /><Mail absoluteStrokeWidth />; <ListTodo size={20} strokeWidth={1.25} absoluteStrokeWidth />
<Mail size={20} strokeWidth={1.25} absoluteStrokeWidth />; <CalendarDays size={20} strokeWidth={1.25} absoluteStrokeWidth />*/
}
