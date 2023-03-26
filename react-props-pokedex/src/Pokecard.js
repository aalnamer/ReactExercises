import React from "react";
import "./Pokecard.css";

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

console.log(POKE_API);
console.log(`${POKE_API}${4}.png`);

const Pokemon = ({ name, type, id, exp }) => {
  let imgSrc = `${POKE_API}${id}.png`;
  return (
    <div className="container">
      <h4>{name}</h4>
      <img src={imgSrc} alt="pokemon"></img>
      <p> Type: {type}</p>
      <p> Exp: {exp}</p>
    </div>
  );
};

export default Pokemon;
