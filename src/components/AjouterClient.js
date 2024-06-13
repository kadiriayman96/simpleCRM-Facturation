import React, { Component } from "react";

class AjouterClient extends Component {
  render() {
    return (
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajouter un client
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={this.props.closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="clientName" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clientName"
                    placeholder="Nom du Client"
                  />
                </div>
                <div className="mb-3">
                  <label for="clientAdress" className="form-label">
                    Adresse
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clientAdress"
                    placeholder="Ladressa dial khouna"
                  />
                </div>
                <div className="mb-3">
                  <label for="clientPhone" className="form-label">
                    Telephone
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="clientPhone"
                    placeholder="0661748520"
                  />
                </div>
                <div className="mb-3">
                  <div className="mb-3">
                    <label for="clientEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="clientEmail"
                      placeholder="client.email@gmail.com"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.closeModal}
              >
                Fermer
              </button>
              <button type="button" className="btn btn-primary">
                Ajouter Le Client
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AjouterClient;
