import React from "react";
import "./PokemonList.css";

const PokemonList = (props) => {
  return (
    <div className="jumbotron">
      {props.pokemons.map((pokemon) => (
        <div
          className="card"
          key={pokemon.id}
          onClick={() => props.click(pokemon.id)}
        >
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
