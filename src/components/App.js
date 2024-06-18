import React, { Component } from "react";
import AjouterDetailsFacture from "./AjouterDetailsFacture";
import FactureList from "./FactureList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factures: JSON.parse(localStorage.getItem("factures")) || [],
    };
  }

  addFacture = (newFacture) => {
    this.setState((prevState) => {
      const updatedFactures = [...prevState.factures, newFacture];
      localStorage.setItem("factures", JSON.stringify(updatedFactures));
      return { factures: updatedFactures };
    });
  };

  render() {
    return (
      <div className="container mt-5 shadow-box">
        <AjouterDetailsFacture addFacture={this.addFacture} />
        <FactureList factures={this.state.factures} />
      </div>
    );
  }
}

export default App;
