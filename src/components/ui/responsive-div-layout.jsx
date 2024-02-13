"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export function ResponsiveDivLayout({ className, children, ...props }) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
