"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function ResponsiveDivLayout({ className, children, ...props }) {
  return (
    <div
      className={cn("h-screen w-sreen flex flex-col md:flex-row", className)}
      {...props}
    >
      {children}
    </div>
  );
}
