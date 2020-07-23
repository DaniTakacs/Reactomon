import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PokemonList from "./Components/PokemonList/PokemonList";
import TypeList from "./Components/TypeList/TypeList";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";
import axios from "axios";

class App extends React.Component {
  state = {
    activeSelection: "pokemons",
    pokemons: [],
    types: [],
    selectedPokemon: {},
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) =>
        this.setState({ ...this.state, pokemons: response.data.results })
      );
  }

  onButtonClick = (e) => {
    if (this.state.type != [] && this.state.activeSelection === "pokemons") {
      axios
        .get("https://pokeapi.co/api/v2/type")
        .then((response) =>
          this.setState({ ...this.state, types: response.data.results })
        );
    }
    this.setState({ ...this.state, activeSelection: e.target.value });
  };

  onPokemonClick = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      this.setState({
        ...this.state,
        selectedPokemon: response.data,
        activeSelection: "single-pokemon",
      })
    );
  };

  render() {
    let content;
    if (this.state.activeSelection === "pokemons") {
      content = (
        <PokemonList
          pokemons={this.state.pokemons}
          click={(id) => this.onPokemonClick(id)}
        />
      );
    } else if (this.state.activeSelection === "types") {
      content = <TypeList types={this.state.types} />;
    } else if (this.state.activeSelection === "single-pokemon") {
      content = <PokemonDetail pokemon={this.state.selectedPokemon} />;
    } else {
      content = "Error during displaying content";
    }

    return (
      <div className="App">
        <Navbar
          click={this.onButtonClick}
          activeButton={this.state.activeSelection}
        />
        {content}
      </div>
    );
  }
}

export default App;
