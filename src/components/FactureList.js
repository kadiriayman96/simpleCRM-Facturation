import React, { Component } from "react";
import "../css/FactureList.css";

class FactureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factures: [],
      selectedFacture: null,
      showModal: false,
    };
  }

  componentDidMount() {
    // Fetch invoices from localStorage
    const factures = JSON.parse(localStorage.getItem("factures")) || [];
    this.setState({ factures });
  }

  viewDetails = (facture) => {
    this.setState({ selectedFacture: facture, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedFacture: null });
  };

  render() {
    const { factures, selectedFacture, showModal } = this.state;
    return (
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr className="table-primary">
              <th scope="col">ID Facture</th>
              <th scope="col">Nom du Client</th>
              <th scope="col">Montant HT</th>
              <th scope="col">Montant TVA</th>
              <th scope="col">Montant TTC</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {factures.map((facture) => (
              <tr key={facture.id}>
                <td>{facture.id}</td>
                <td>{facture.client}</td>
                <td>{facture.montantHT}</td>
                <td>{facture.montantTVA}</td>
                <td>{facture.montantTTC}</td>
                <td>
                  <button
                    onClick={() => this.viewDetails(facture)}
                    className="btn btn-primary"
                  >
                    Voir Détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && selectedFacture && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <h2>Détails de la Facture</h2>
              <ul>
                {selectedFacture.articles.map((article, index) => (
                  <li key={index}>
                    {article.nom} - Quantité: {article.quantite}, Prix:{" "}
                    {article.prix}, Remise: {article.remise}, Montant:{" "}
                    {article.montant}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FactureList;
