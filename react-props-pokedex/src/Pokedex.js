import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon }) {
  const total = pokemon.reduce((acc, i) => acc + i.base_experience, 0);
  return (
    <>
      <h2>Pokedex</h2>
      <div className="card">
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {total}</h4>
    </>
  );
}

export default Pokedex;
