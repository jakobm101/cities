'use client'

import { useRouter } from "next/navigation";

export default function Cities() {
  const { back } = useRouter();
  console.log(back);

  return (
    <>
      <h1>Cities</h1>
      <button onClick={back}>back</button>

</>
  );
}
