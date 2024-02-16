"use client";

import * as React from "react";

import { Button } from "@/components/shadcn-ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn-ui/tooltip";

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

export function DesktopSidebar({ className, ...props }) {
  return (
    <div
      className={cn(
        "h-full w-full flex md:flex-col md:justify-between",
        className
      )}
    >
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <LayoutDashboard size={20} strokeWidth={1.25} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

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
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <CircleUserRound size={20} strokeWidth={1.25} />
        </Button>
      </div>
    </div>
  );
}
