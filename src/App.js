import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";

function App() {
  const pokemons = [{ name: "Pikachu" }, { name: "Balbasaur" }];
  return (
    <div className="App">
      <Navbar />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
