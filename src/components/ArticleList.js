import React, { Component } from "react";
import products from "../data";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  addArticle = () => {
    const newArticle = {
      id: Date.now(),
      name: "",
      quantity: 0,
      price: "",
      discount: "",
      total: "",
    };
    this.setState((prevState) => ({
      articles: [...prevState.articles, newArticle],
    }));
  };

  removeArticle = (id) => {
    this.setState((prevState) => ({
      articles: prevState.articles.filter((article) => article.id !== id),
    }));
  };

  handleProductChange = (event) => {
    const { name, value } = event.target;
    const id = parseInt(event.target.id);
    const selectedProduct = products.find((product) => product.name === value);

    if (selectedProduct) {
      const updatedArticles = this.state.articles.map((article) =>
        article.id === id
          ? {
              ...article,
              [name]: value,
              price: selectedProduct.price,
            }
          : article
      );

      this.setState({ articles: updatedArticles });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="col-auto d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={this.addArticle}
          >
            + Ajouter Article
          </button>
        </div>
        <table className="table mt-4" id="tableArticle">
          <thead>
            <tr className="table-primary">
              <th scope="col">Article</th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix</th>
              <th scope="col">Remise</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.articles.length > 0 &&
              this.state.articles.map((article) => (
                <tr key={article.id}>
                  <td className="w-25">
                    <select
                      className="form-select"
                      onChange={this.handleProductChange}
                      name="name"
                      id={article.id}
                      value={article.name}
                    >
                      <option value="" disabled>
                        Sélectionner un produit
                      </option>
                      {products.map((product) => (
                        <option key={product.id}>{product.name}</option>
                      ))}
                    </select>
                  </td>
                  <td style={{ width: "200px" }}>
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      id={article.id}
                      value={article.quantity}
                      onChange={this.handleProductChange}
                    />
                  </td>
                  <td>{article.price}</td>
                  <td>{article.discount}</td>
                  <td>{article.total}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.removeArticle(article.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArticleList;
