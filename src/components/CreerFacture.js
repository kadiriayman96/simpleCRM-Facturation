import React, { Component } from "react";
import AjouterDetailsFacture from "./AjouterDetailsFacture";
import ArticleList from "./ArticleList";

class CreerFacture extends Component {
  render() {
    return (
      <div>
        <AjouterDetailsFacture />
        <ArticleList />
      </div>
    );
  }
}

export default CreerFacture;
