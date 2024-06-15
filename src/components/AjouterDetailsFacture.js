import React, { Component } from "react";
import AjouterClient from "./AjouterClient";

class AjouterDetailsFacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      clients: [],
    };
  }

  componentDidMount() {
    // Get clients from local storage
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    this.setState({ clients });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showModal !== this.state.showModal) {
      const clients = JSON.parse(localStorage.getItem("clients")) || [];
      this.setState({ clients });
    }
  }
  openModal = (event) => {
    if (event.target.value === "10") {
      this.setState({ showModal: true });
    }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  ajouterFacture = (event) => {
    eventPreventDefault();

    

  };

  render() {
    const { clients, showModal } = this.state;

    return (
      <div className="container mt-5">
        <form className="row g-3">
          <div className="col-auto">
            <label htmlFor="idFacture">Id Facture</label>
            <input type="text" className="form-control" id="idFacture" />
          </div>
          <div className="col-auto">
            <label htmlFor="dateFacture">Date Facture</label>
            <input type="date" className="form-control" id="dateFacture" />
          </div>
          <div className="col-auto">
            <label htmlFor="facturePour">Facture Pour</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="facturePour"
              onChange={this.openModal}
            >
              <option value="0" disabled selected>
                Selectionner un client
              </option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
              <option value="10">+ Ajouter un client</option>
            </select>
            {showModal && <AjouterClient closeModal={this.closeModal} />}
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-success mt-4"
              id="ajouterFacture"
            >
              Ajouter Facture
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AjouterDetailsFacture;
