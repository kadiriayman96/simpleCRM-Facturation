import React, { Component } from "react";

class DetailsFacture extends Component {
  render() {
    const { selectedFacture, closeModal } = this.props;

    return (
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Détails de la Facture</h5>
            </div>
            <div className="modal-body">
              <ul>
                {selectedFacture.articles.map((article, index) => (
                  <li key={index}>
                    {article.name} - Quantité: {article.quantity}, Prix:{" "}
                    {article.price} MAD, Remise: {article.discount}, Total:{" "}
                    {article.total} MAD
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsFacture;
