import React from "react";
import banner from "./pokemon_banner.png";
import styled from "styled-components";

const StyledPokemonButton = styled.button`
  background-color: ${(props) =>
    props.alt === "pokemons" ? "#3a5da2" : "white"};
  color: ${(props) => (props.alt === "pokemons" ? "#facc00" : "black")};
  font: inherit;
  cursor: pointer;
  border-radius: 12px;
  margin-left: 100px;
  margin-right: 100px;
  :focus {
    outline: none;
  }
`;

const StyledTypesButton = styled.button`
  background-color: ${(props) => (props.alt === "types" ? "#3a5da2" : "white")};
  color: ${(props) => (props.alt === "types" ? "#facc00" : "black")};
  font: inherit;
  cursor: pointer;
  border-radius: 12px;
  margin-left: 100px;
  margin-right: 100px;
  :focus {
    outline: none;
  }
`;

const Navbar = (props) => {
  return (
    <div>
      <img src={banner} alt="Pokemon Banner"></img>
      <p></p>
      <StyledPokemonButton
        alt={props.activeButton}
        onClick={props.click}
        value="pokemons"
      >
        Pokemons
      </StyledPokemonButton>
      <StyledTypesButton
        alt={props.activeButton}
        onClick={props.click}
        value="types"
      >
        Types
      </StyledTypesButton>
    </div>
  );
};

export default Navbar;
