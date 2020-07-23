import React from "react";
import "./PokemonList.css";

const PokemonList = (props) => {
  const createImgPath = (path) => {
    const pokemonId = path.split("/")[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  };
  return (
    <div className="jumbotron">
      {props.pokemons.map((pokemon) => (
        <div
          className="card"
          key={pokemon.name}
          onClick={() => props.click(pokemon.name)}
        >
          <img src={createImgPath(pokemon.url)} width="80" height="70"></img>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
