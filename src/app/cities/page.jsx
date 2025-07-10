"use client";
import City from "@/components/Cities";
import cities from "../../../lib/data";
import { useRouter } from "next/navigation";

export default function Cities() {
  const { back } = useRouter();

  return (
    <>
      <button onClick={back}>back</button>
      <h1>Cities</h1>
      <City cities={cities}/>
      
    </>
  );
}
