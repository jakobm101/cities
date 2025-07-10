"use client";
import City from "@/components/Cities";
import cities from "../../lib/data";
import { useRouter } from "next/navigation";
import Button__Back from "@/components/Button__Back";

export default function Cities() {
  const { back } = useRouter();

  return (
    <>
      <Button__Back back={back}/>
      <h1>Cities</h1>
      <City cities={cities}/>
      
    </>
  );
}
