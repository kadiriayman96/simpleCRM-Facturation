import React, { Component } from "react";

class Article extends Component {
  calculateDiscount = (quantity) => {
    if (quantity < 10) return 5;
    if (quantity >= 10 && quantity < 20) return 10;
    if (quantity >= 20 && quantity < 50) return 15;
    if (quantity >= 50) return 20;
  };

  handleProductChange = (event) => {
    const { name, value } = event.target;
    const { article, products, onUpdate } = this.props;
    const selectedProduct = products.find((product) => product.name === value);
    const quantity =
      name === "quantity" ? parseInt(value) : parseInt(article.quantity) || 0;

    const newPrice = selectedProduct ? selectedProduct.price : article.price;
    const newQuantity =
      name === "quantity" ? parseInt(value) : article.quantity;
    const discountRate = this.calculateDiscount(newQuantity);
    const discount = newPrice * newQuantity * (discountRate / 100);
    const total = newPrice * newQuantity - discount;

    const updatedArticle = {
      ...article,
      [name]: value,
      price: newPrice,
      discount: `${discountRate}`,
      total: `${total.toFixed(2)}`,
    };

    onUpdate(article.id, updatedArticle);
  };

  render() {
    const { article, products, onRemove } = this.props;

    return (
      <tr>
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
        <td>{article.discount}%</td>
        <td>{article.total} MAD</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onRemove(article.id)}
          >
            Supprimer
          </button>
        </td>
      </tr>
    );
  }
}

export default Article;
