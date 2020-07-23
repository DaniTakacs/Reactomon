import React from "react";

const PokemonDetail = (props) => {
  return (
    <div>
      <img src={props.pokemon.sprites.front_default}></img>
      <p>Name: {props.pokemon.name}</p>
      <p>Height: {props.pokemon.height}</p>
      <p>Weight: {props.pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetail;
