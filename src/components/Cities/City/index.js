export default function City({ city }) {
  const { id, name, description, country, population } = city;
  return (
    <>
      <article key={id}>
        <h2>{name}</h2>
        <ul>
          <li>{description}</li>
          <li style={{fontSize:'small'}}>{country}</li>
          <li style={{fontFamily:'monospace'}}>{population}</li>
        </ul>
      </article>
    </>
  );
}
