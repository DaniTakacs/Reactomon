import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <button onClick={props.click} value="pokemons">
        Pokemons
      </button>
      <button onClick={props.click} value="types">
        Types
      </button>
    </div>
  );
};

export default Navbar;
