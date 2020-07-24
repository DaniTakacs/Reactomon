import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";
import axios from "axios";
import ThemeContext from "./context/ThemeContext.js";

const App = (props) => {
  const [State, SetAppState] = useState({
    activeSelection: "pokemons",
    pokemons: [],
    types: [],
    selectedPokemon: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get("https://pokeapi.co/api/v2/pokemon"),
      axios.get("https://pokeapi.co/api/v2/type"),
    ]).then((values) =>
      SetAppState({
        ...State,
        pokemons: values[0].data.results,
        types: values[1].data.results,
      })
    );
  }, []);

  const onButtonClick = (e) => {
    SetAppState({ ...State, activeSelection: e.target.value });
  };

  const onPokemonClick = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      SetAppState({
        ...State,
        selectedPokemon: response.data,
        activeSelection: "single-pokemon",
      })
    );
  };

  let content;
  if (State.activeSelection === "pokemons") {
    content = (
      <PokemonList
        pokemons={State.pokemons}
        click={(id) => onPokemonClick(id)}
      />
    );
  } else if (State.activeSelection === "types") {
    content = <TypeList types={State.types} />;
  } else if (State.activeSelection === "single-pokemon") {
    content = <PokemonDetail pokemon={State.selectedPokemon} />;
  } else {
    content = "Error during displaying content";
  }

  return (
    <div className="App">
      <Navbar click={onButtonClick} activeButton={State.activeSelection} />
      {content}
    </div>
  );
};

export default App;
