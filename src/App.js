import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";

function App() {
  const pokemons = [{ name: "Pikachu" }, { name: "Bulbasaur" }];
  const types = [{ name: "normal" }, { name: "water" }];
  const singlePokemon = { name: "Bulbasaur", height: 7, weight: 69 };

  return (
    <div className="App">
      <Navbar />
      <PokemonList pokemons={pokemons} />
      <TypeList types={types} />
      <PokemonDetail pokemon={singlePokemon} />
    </div>
  );
}

export default App;
