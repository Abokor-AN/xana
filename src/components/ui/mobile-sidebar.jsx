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

import { cn } from "@/lib/utils";

export function MobileSidebar({ className, ...props }) {
  return (
    <div className={cn("h-full w-full items-center justify-around", className)}>
      <Button variant="ghost" size="icon">
        <LayoutDashboard size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <Mail size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <CalendarDays size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <ListTodo size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <Notebook size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <Wallet size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <Users size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <LayoutGrid size={20} strokeWidth={1.25} />
      </Button>
      <Button variant="ghost" size="icon">
        <CircleUserRound size={20} strokeWidth={1.25} />
      </Button>
    </div>
  );
}
