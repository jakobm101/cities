import City from "./City";

export default function Cities({ cities }) {
  return (
    <>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </>
  );
}
