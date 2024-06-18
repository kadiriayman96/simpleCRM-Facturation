import React, { Component } from "react";

class AjouterClient extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const submitButton = document.getElementById("ajouterClient");
    submitButton.addEventListener("click", this.ajouterClient);
  }

  // Ajouter un client to local storage
  ajouterClient = (event) => {
    event.preventDefault();

    const clientName = document.getElementById("clientName").value;
    const clientAddress = document.getElementById("clientAdress").value;
    const clientPhone = document.getElementById("clientPhone").value;
    const clientEmail = document.getElementById("clientEmail").value;

    if (
      clientName === "" ||
      clientAddress === "" ||
      clientPhone === "" ||
      clientEmail === ""
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    // add to local storage
    const client = {
      id: Date.now(),
      name: clientName,
      address: clientAddress,
      phone: clientPhone,
      email: clientEmail,
    };
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    clients.push(client);
    localStorage.setItem("clients", JSON.stringify(clients));

    this.props.closeModal();
  };

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
              <div className="mb-3">
                <label htmlFor="clientName" className="form-label">
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
                <label htmlFor="clientAdress" className="form-label">
                  Adresse
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="clientAdress"
                  placeholder="L'adresse du Client"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="clientPhone" className="form-label">
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
                  <label htmlFor="clientEmail" className="form-label">
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.closeModal}
              >
                Fermer
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="ajouterClient"
              >
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
