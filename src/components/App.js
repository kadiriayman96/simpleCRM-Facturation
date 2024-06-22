import React, { Component } from "react";
import AjouterDetailsFacture from "./AjouterDetailsFacture";
import FactureList from "./FactureList";
import AjouterClient from "./AjouterClient";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factures: JSON.parse(localStorage.getItem("factures")) || [],
      clients: JSON.parse(localStorage.getItem("clients")) || [],
      showModal: false,
    };
  }

  addFacture = (newFacture) => {
    this.setState((prevState) => {
      const updatedFactures = [...prevState.factures, newFacture];
      localStorage.setItem("factures", JSON.stringify(updatedFactures));
      return { factures: updatedFactures };
    });
  };

  addClient = (newClient) => {
    this.setState((prevState) => {
      const updatedClients = [...prevState.clients, newClient];
      localStorage.setItem("clients", JSON.stringify(updatedClients));
      return { clients: updatedClients };
    });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    return (
      <div className="container mt-5 shadow-box">
        <AjouterDetailsFacture
          addFacture={this.addFacture}
          clients={this.state.clients}
          toggleModal={this.toggleModal}
        />
        <FactureList factures={this.state.factures} />

        {this.state.showModal && (
          <AjouterClient
            addClient={this.addClient}
            closeModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
