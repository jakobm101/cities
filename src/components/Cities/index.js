import Link from "next/link";
import cities from "../../../lib/data";

export default function Cities() {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.slug}>
          <button>
            <Link href={`/cities/${city.slug}`}>{city.name}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
}
