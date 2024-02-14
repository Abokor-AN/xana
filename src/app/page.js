import Image from "next/image";

import { ModeToggle } from "@/components/ui/theme-toggle";
import { ResponsiveDivLayout } from "@/components/ui/responsive-div-layout";
import { Sidebar } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <ResponsiveDivLayout
        className={"h-screen w-sreen flex flex-col md:flex-row"}
      >
        <div className="h-full w-full md:h-full">
          content<ModeToggle></ModeToggle>
        </div>
        <Sidebar
          className={"h-20 w-full md:h-full md:w-10 md:order-first"}
        ></Sidebar>
      </ResponsiveDivLayout>
    </>
  );
}
