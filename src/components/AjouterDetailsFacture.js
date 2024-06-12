import React, { Component } from "react";

class AjouterDetailsFacture extends Component {
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
            <input type="text" className="form-control" id="dateFacture" />
          </div>
          <div className="col-auto">
            <label htmlFor="facturePour">Facture Pour</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="facturePour"
              defaultValue=""
            >
              <option value="" disabled>
                Selectionner le client
              </option>
              <option value="1">One</option>
            </select>
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
