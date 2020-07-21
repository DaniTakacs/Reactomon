import React from "react";

const PokemonList = (props) => {
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <div key={pokemon.id} onClick={() => props.click(pokemon.id)}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
