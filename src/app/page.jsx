"use client";
import { useRouter } from "next/navigation";
import Cities from "@/components/Cities";

export default function Home() {
  return (
    <>
      <h1>Cities</h1>
      <Cities />
    </>
  );
}
