'use client'
import { use } from "react";
import cities from "../../../../lib/data";
import City from "@/components/Cities/City";
import { useRouter } from "next/navigation";

export default function CityPage({ params }) {
  const { back } = useRouter;
  const { id } = use(params);
  // just "==" to avoid type mismatch
  const city = cities.find((item) => item.id == id || item.slug == id);

  return (
    <>
      <h1>{city.name}</h1>
      <City city={city} back={back} />
    </>
  );
}
