import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Cities 🌶️</h1>
      <Link href={"/cities"}>Cities</Link>
    </>
  );
}
