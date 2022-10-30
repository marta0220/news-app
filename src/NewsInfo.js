import React from "react";
import Article from "./Article";

export default function NewsInfo({ articles }) {
  return (
    <div className="NewsInfo row">
      {articles.map(function (article, index) {
        return (
          <section key={index} className="col-md-4">
            <Article article={article} />
          </section>
        );
      })}
    </div>
  );
}
