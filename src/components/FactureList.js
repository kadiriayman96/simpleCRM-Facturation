import React, { Component } from "react";
import DetailsFacture from "./DetailsFacture";

class FactureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFacture: null,
      showModal: false,
    };
  }

  viewDetails = (facture) => {
    this.setState({ selectedFacture: facture, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedFacture: null });
  };

  render() {
    const { factures } = this.props;
    const { selectedFacture, showModal } = this.state;
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
                <td>{facture.idFacture}</td>
                <td>{facture.clientName}</td>
                <td>{facture.totalHT} MAD</td>
                <td>{facture.totalTVA} MAD</td>
                <td>{facture.totalTTC} MAD</td>
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
          <DetailsFacture
            selectedFacture={selectedFacture}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default FactureList;
