"use client";

import * as React from "react";

export function ResponsiveDivLayout({ className, children, ...props }) {
  return (
    <div
      className="md:hidden h-screen w-sreen flex flex-col md:flex-row"
      {...props}
    >
      {children}
    </div>
  );
}
