'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-5xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <div className="md:text-2xl py-3">
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </div>
        </Link>

          <div className="md:text-2xl p-3">      
            <MenuItem setActive={setActive} active={active} item="All Courses">
              <div className="flex flex-col space-y-4 text-base">
                <HoveredLink href="/courses">All Courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                <HoveredLink href="/courses">Songwriting</HoveredLink>
                <HoveredLink href="/courses">Music Production</HoveredLink>
              </div>
            </MenuItem>
          </div>
        
        <Link href={"/contact"}>
        <div className="md:text-2xl py-3">
          <MenuItem setActive={setActive} active={active} item="Contact">

          </MenuItem>
        </div>
        </Link>
      </Menu>
    </div>
  );

}

export default Navbar