import Image from "next/image";

import { ModeToggle } from "@/components/ui/theme-toggle";
import { ResponsiveDivLayout } from "@/components/ui/responsive-div-layout";
import { Sidebar } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <ResponsiveDivLayout>
      <Sidebar></Sidebar>
      <div className="h-full w-full">
        content<ModeToggle></ModeToggle>
      </div>
    </ResponsiveDivLayout>
  );
}
