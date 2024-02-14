"use client";

import * as React from "react";

import { Button } from "@/components/shadcn-ui/button";

import { Bold, Italic, Underline } from "lucide-react";

import { cn } from "@/lib/utils";

export function Sidebar({ className, ...props }) {
  return (
    <div
      className={cn(
        "p-px flex items-center justify-center md:flex-col md:items-start md:justify-start",
        className
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        className="border-2 border-l-blue-700 border-t-transparent border-b-transparent border-r-transparent"
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="border-2 border-l-transparent border-t-transparent border-b-transparent border-r-transparent"
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="border-2 border-l-transparent border-t-transparent border-b-transparent border-r-transparent"
      >
        <Underline className="h-4 w-4" />
      </Button>
    </div>
  );
}
