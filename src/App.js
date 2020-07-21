import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";

class App extends React.Component {
  state = {
    activeButton: "pokemons",
  };

  onButtonClick = (e) => {
    this.setState({ ...this.state, activeButton: e.target.value });
  };

  render() {
    const pokemons = [
      { name: "Pikachu", id: 1 },
      { name: "Bulbasaur", id: 2 },
    ];
    const types = [
      { name: "normal", id: 1 },
      { name: "water", id: 2 },
    ];
    const singlePokemon = { name: "Bulbasaur", height: 7, weight: 69 };

    const content =
      this.state.activeButton === "pokemons" ? (
        <PokemonList pokemons={pokemons} />
      ) : (
        <TypeList types={types} />
      );

    return (
      <div className="App">
        <Navbar click={this.onButtonClick} />
        {content}
        {/* <PokemonDetail pokemon={singlePokemon} /> */}
      </div>
    );
  }
}

export default App;
