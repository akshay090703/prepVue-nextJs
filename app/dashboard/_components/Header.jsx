"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex p-4 justify-between items-start bg-secondary shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/resources" && "text-primary font-bold"
          }`}
        >
          Resources
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard/howitworks" && "text-primary font-bold"
          }`}
        >
          How it works
        </li>
      </ul>

      <UserButton />
    </div>
  );
};

export default Header;
