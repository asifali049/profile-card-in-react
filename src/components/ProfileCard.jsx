import { Children } from "react";

function PofileCard({ name, age, location, profession, children }) {
  return (
    <>
      <h2>Name {name}</h2>
      <p>Age {age}</p>
      <p>Location {location}</p>
      <p>Profession {profession}</p>
      <div>{children}</div>
    </>
  );
}

export default PofileCard;
