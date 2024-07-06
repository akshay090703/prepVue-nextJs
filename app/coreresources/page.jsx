"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CoreResources = () => {
  const router = useRouter();

  router.push(
    "https://www.geeksforgeeks.org/prepare-cs-core-subjects-for-placements/"
  );
  return <div></div>;
};

export default CoreResources;
