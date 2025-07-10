"use client";
import cities from "../../../lib/data";
import { useRouter } from "next/navigation";

export default function Cities() {
  const { back } = useRouter();
  console.log(cities);

  return (
    <>
      <button onClick={back}>back</button>
      <h1>Cities</h1>
      {cities.map(({ id, name, description, country, population }) => (
        <article key={id}>
          <h2>{name}</h2>
          <ul>
            <li>{description}</li>
            <li>{country}</li>
            <li>{population}</li>
          </ul>
        </article>
      ))}
    </>
  );
}
