import React, { Component } from "react";
import AjouterClient from "./AjouterClient";
import ArticleList from "./ArticleList";

class AjouterDetailsFacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  ajouterFacture = (event) => {
    event.preventDefault();

    const idFacture = document.getElementById("idFacture").value;
    const date = document.getElementById("dateFacture").value;
    const clientId = document.getElementById("facturePour").value;

    if (
      idFacture === "" ||
      date === "" ||
      clientId === "0" ||
      clientId === "10" ||
      this.state.articles.length === 0
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const client = this.props.clients.find(
      (client) => client.id === parseInt(clientId)
    );
    if (!client) {
      alert("Client non valide");
      return;
    }

    const clientName = client.name;
    const { articles } = this.state;

    for (const article of articles) {
      if (
        !article.name ||
        article.quantity === "" ||
        article.price === "" ||
        article.quantity <= 0 ||
        article.price <= 0
      ) {
        alert("Veuillez remplir tous les détails des articles correctement");
        return;
      }
    }

    // Calculate total TTC
    const totalTTC = articles
      .reduce((sum, article) => sum + parseFloat(article.total), 0)
      .toFixed(2);

    // Calculate total discount (which is the total VAT)
    const totalTVA = articles
      .reduce((sum, article) => sum + parseFloat(article.discount), 0)
      .toFixed(2);

    // Calculate total HT
    const totalHT = (totalTTC - totalTVA).toFixed(2);

    const articleDetails = articles.map((article) => {
      const { name, quantity, price, discount, total } = article;
      return {
        name,
        quantity,
        price,
        discount,
        total,
      };
    });

    let factureDetails = `ID Facture: ${idFacture}\nDate: ${date}\nClient: ${clientName}\n\nArticles:\n`;
    articles.forEach((article) => {
      factureDetails += `- Name: ${article.name}, Quantity: ${article.quantity}, Price: ${article.price} MAD, Discount: ${article.discount}, Total: ${article.total} MAD\n`;
    });
    factureDetails += `\nTotal HT: ${totalHT} MAD\nTotal TVA: ${totalTVA} MAD\nTotal TTC: ${totalTTC} MAD`;

    alert(factureDetails);

    const facture = {
      id: Date.now(),
      idFacture,
      date,
      clientName,
      articles: articleDetails,
      totalHT,
      totalTVA,
      totalTTC,
    };

    this.props.addFacture(facture);
  };

  updateArticles = (articles) => {
    this.setState({ articles });
  };

  render() {
    const { clients, toggleModal } = this.props;

    return (
      <div className="container mt-5">
        <form className="row g-3" onSubmit={this.ajouterFacture}>
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
              onChange={(e) => {
                if (e.target.value === "10") {
                  toggleModal();
                }
              }}
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
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-success mt-4"
              id="ajouterFacture"
            >
              Ajouter Facture
            </button>
          </div>
        </form>
        <ArticleList updateArticles={this.updateArticles} />
      </div>
    );
  }
}

export default AjouterDetailsFacture;
