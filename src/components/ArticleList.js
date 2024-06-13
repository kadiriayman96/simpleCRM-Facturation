import React, { Component } from "react";

class ArticleList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="col-auto d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary mt-4"
            id="ajouterArticle"
          >
            + Ajouter Article
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Article</th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix</th>
              <th scope="col">Remise</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td className="w-25">
                <select className="form-select">
                  <option value="" selected>
                    Asus TUF Gaming F15
                  </option>
                </select>
              </td>
              <td style={{ width: "200px" }}>
                <input
                  type="number"
                  defaultValue="10"
                  className="form-control"
                  min="0"
                />
              </td>
              <td>5000.00 DH</td>
              <td>20%</td>
              <td>4000.00 DH</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArticleList;
