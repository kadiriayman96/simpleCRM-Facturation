import React, { Component } from "react";
import products from "../data";
import Article from "./Article";

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

  updateArticle = (id, updatedArticle) => {
    const updatedArticles = this.state.articles.map((article) =>
      article.id === id ? { ...article, ...updatedArticle } : article
    );
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
                <Article
                  key={article.id}
                  article={article}
                  products={products}
                  onRemove={this.removeArticle}
                  onUpdate={this.updateArticle}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArticleList;
