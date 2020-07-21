import React from "react";

const PokemonDetail = (props) => {
  return (
    <div>
      <p>Name: {props.pokemon.name}</p>
      <p>Height: {props.pokemon.height}</p>
      <p>Weight: {props.pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetail;
