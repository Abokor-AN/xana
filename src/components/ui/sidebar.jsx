"use client";

import * as React from "react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shadcn-ui/toggle-group";

import { Bold, Italic, Underline } from "lucide-react";

import { cn } from "@/lib/utils";

export function Sidebar({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center md:items-start",
        className
      )}
      {...props}
    >
      <ToggleGroup type="single" className="flex md:flex-col">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
