import Button__Back from "@/components/Button__Back";

export default function City({ city,back }) {
  const { id, name, description, country, population } = city;
  return (
    <>
      <article key={id}>
        <h2>{name}</h2>
        <ul>
          <li>{description}</li>
          <li>{country}</li>
          <li>{population}</li>
        </ul>
      </article>
      <Button__Back back={back}/>
    </>
  );
}
