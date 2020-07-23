import React from "react";
import banner from "./pokemon_banner.png";
import "./Navbar.css";

const Navbar = (props) => {
  let pokemonsButtonClass = ["base-button"];
  let typesButtonClass = ["base-button"];

  if (props.activeButton === "pokemons") {
    pokemonsButtonClass.push("active-button");
  } else if (props.activeButton === "types") {
    typesButtonClass.push("active-button");
  }

  console.log("Pokemon button class: " + pokemonsButtonClass);
  console.log("Type button class: " + typesButtonClass);

  return (
    <div>
      <img src={banner} alt="Pokemon Banner"></img>
      <p></p>
      <button
        className={pokemonsButtonClass.join(" ")}
        onClick={props.click}
        value="pokemons"
      >
        Pokemons
      </button>
      <button
        className={typesButtonClass.join(" ")}
        onClick={props.click}
        value="types"
      >
        Types
      </button>
    </div>
  );
};

export default Navbar;
