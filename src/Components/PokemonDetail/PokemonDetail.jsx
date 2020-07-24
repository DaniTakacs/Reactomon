import React from "react";
import classes from "./PokemonDetail.module.css";

const PokemonDetail = (props) => {
  return (
    <div className={classes.JumbotronDetail}>
      <div className={classes.DetailCard}>
        <div className={classes.CardImage}>
          <img
            src={props.pokemon.sprites.front_default}
            width="100"
            height="100"
          ></img>
        </div>
        <div className={classes.CardText}>
          <p>Name: {props.pokemon.name}</p>
          <p>Height: {props.pokemon.height}</p>
          <p>Weight: {props.pokemon.weight}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
