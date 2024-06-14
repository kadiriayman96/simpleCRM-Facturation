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
      quantity: "",
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

  calculateDiscount = (quantity) => {
    if (quantity < 10) return 5;
    if (quantity >= 10 && quantity < 20) return 10;
    if (quantity >= 20 && quantity < 50) return 15;
    if (quantity >= 50) return 20;
  };

  handleProductChange = (event) => {
    const { name, value } = event.target;
    const id = parseInt(event.target.id);
    const selectedProduct = products.find((product) => product.name === value);
    const quantity =
      name === "quantity"
        ? parseInt(value)
        : parseInt(
            this.state.articles.find((article) => article.id === id)?.quantity
          ) || 0;

    const updatedArticles = this.state.articles.map((article) => {
      if (article.id === id) {
        const newPrice = selectedProduct
          ? selectedProduct.price
          : article.price;
        const newQuantity =
          name === "quantity" ? parseInt(value) : article.quantity;
        const discountRate = this.calculateDiscount(newQuantity);
        const discount = newPrice * newQuantity * (discountRate / 100);
        const total = newPrice * newQuantity - discount;

        return {
          ...article,
          [name]: value,
          price: newPrice,
          discount: `${discountRate} %`,
          total: `${total.toFixed(2)} MAD`,
        };
      }
      return article;
    });

    this.setState({ articles: updatedArticles });
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
                  <td>{article.price} MAD</td>
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
