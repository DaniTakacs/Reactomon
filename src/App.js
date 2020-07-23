import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";
import axios from "axios";

class App extends React.Component {
  state = {
    activeButton: "pokemons",
    pokemonId: "",
    pokemons: [],
    types: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) =>
        this.setState({ ...this.state, pokemons: response.data.results })
      );
  }

  onButtonClick = (e) => {
    if (this.state.type != [] && this.state.activeButton === "pokemons") {
      axios
        .get("https://pokeapi.co/api/v2/type")
        .then((response) =>
          this.setState({ ...this.state, types: response.data.results })
        );
    }
    this.setState({ ...this.state, activeButton: e.target.value });
  };

  onPokemonClick = (id) => {
    this.setState({
      ...this.state,
      pokemonId: id,
    });
  };

  render() {
    // const types = [
    //   { name: "fire", id: 1 },
    //   { name: "water", id: 2 },
    // ];
    const singlePokemon = { name: "Bulbasaur", height: 7, weight: 69 };

    const content =
      this.state.activeButton === "pokemons" ? (
        <PokemonList
          pokemons={this.state.pokemons}
          click={(id) => this.onPokemonClick(id)}
        />
      ) : (
        <TypeList types={this.state.types} />
      );

    return (
      <div className="App">
        <Navbar
          click={this.onButtonClick}
          activeButton={this.state.activeButton}
        />
        {content}
        {/* <PokemonDetail pokemon={singlePokemon} /> */}
        <p>Selected Pokemon: {this.state.pokemonId}</p>
      </div>
    );
  }
}

export default App;
