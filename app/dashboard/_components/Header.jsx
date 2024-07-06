"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex p-4 justify-between items-start bg-secondary shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
      <ul className="flex gap-6">
        <Link href={"/dashboard"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </li>
        </Link>
        <Link href={"/projectideas"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/projectideas" && "text-primary font-bold"
            }`}
          >
            Project Ideas
          </li>
        </Link>
        <Link href={"/dsaresources"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path == "/dsaresources" && "text-primary font-bold"
            }`}
          >
            DSA Resources
          </li>
        </Link>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/coreresources" && "text-primary font-bold"
          }`}
        >
          <a
            href="https://www.geeksforgeeks.org/prepare-cs-core-subjects-for-placements/"
            target="_blank"
          >
            Core Subjects Resources
          </a>
        </li>
      </ul>

      <UserButton />
    </div>
  );
};

export default Header;
