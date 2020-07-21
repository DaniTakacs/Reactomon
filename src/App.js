import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";

class App extends React.Component {
  state = {
    activeButton: "pokemons",
    pokemonId: 0,
  };

  onButtonClick = (e) => {
    this.setState({ ...this.state, activeButton: e.target.value });
  };

  onPokemonClick = (id) => {
    this.setState({ ...this.state, pokemonId: id });
    console.log(id);
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
        <PokemonList
          pokemons={pokemons}
          click={(id) => this.onPokemonClick(id)}
        />
      ) : (
        <TypeList types={types} />
      );

    return (
      <div className="App">
        <Navbar click={this.onButtonClick} />
        {content}
        {/* <PokemonDetail pokemon={singlePokemon} /> */}
        <p>Selected Pokemon: {this.state.pokemonId}</p>
      </div>
    );
  }
}

export default App;
