import React from "react";

const PokemonList = (props) => {
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
