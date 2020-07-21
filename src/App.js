import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";

function App() {
  const pokemons = [{ name: "Pikachu" }, { name: "Balbasaur" }];
  const types = [{ name: "normal" }, { name: "water" }];

  return (
    <div className="App">
      <Navbar />
      <PokemonList pokemons={pokemons} />
      <TypeList types={types} />
    </div>
  );
}

export default App;
