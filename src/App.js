import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://api.opendota.com/api/heroes")
      .then(response => response.json())
      .then(heroes => this.setState({ heroes: heroes }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { heroes, searchField } = this.state;
    const filteredHeroes = heroes.filter(hero =>
      hero.localized_name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>DOTA 2 HERO LIST</h1>
        <SearchBox
          placeholder="Search heroes"
          handleChange={this.handleChange}
        />
        <CardList heroes={filteredHeroes} />
      </div>
    );
  }
}

export default App;
