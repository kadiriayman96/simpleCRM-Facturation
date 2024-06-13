import React, { Component } from "react";
import AjouterClient from "./AjouterClient";

class AjouterDetailsFacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  openModal = (event) => {
    if (event.target.value === "10") {
      this.setState({ showModal: true });
    }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
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
              <option value="1">Reda Abou</option>
              <option value="2">Yasser</option>
              <option value="10">+ Ajouter un client</option>
            </select>
            {this.state.showModal && (
              <AjouterClient closeModal={this.closeModal} />
            )}
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn btn-success mt-4"
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
