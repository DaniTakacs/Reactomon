import React from "react";
import banner from "./pokemon_banner.png";
import "./Navbar.css";

const Navbar = (props) => {
  let pokemonsButtonClass;
  let typesButtonClass;

  if (props.activeButton === "pokemons") {
    pokemonsButtonClass = "button-selected";
    typesButtonClass = "button-not-selected";
  } else {
    pokemonsButtonClass = "button-not-selected";
    typesButtonClass = "button-selected";
  }

  console.log("Pokemon button class: " + pokemonsButtonClass);
  console.log("Type button class: " + typesButtonClass);

  return (
    <div>
      <img src={banner} alt="Pokemon Banner"></img>
      <p></p>
      <button
        className={pokemonsButtonClass}
        onClick={props.click}
        value="pokemons"
      >
        Pokemons
      </button>
      <button className={typesButtonClass} onClick={props.click} value="types">
        Types
      </button>
    </div>
  );
};

export default Navbar;
