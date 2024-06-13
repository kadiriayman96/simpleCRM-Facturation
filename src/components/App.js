import React, { Component } from "react";
import FactureList from "./FactureList";
import CreerFacture from "./CreerFacture";

class App extends Component {
  render() {
    return (
      <div className="container mt-5 shadowbox">
        <h3 className="pt-5">SimpleCRM Facturation</h3>
        <CreerFacture />
        <FactureList />
      </div>
    );
  }
}

export default App;
