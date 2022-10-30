import React from "react";
export default function Article({ article }) {
  console.log(article.urlToImage);
  return (
    <div className="Article">
      <div className="border">
        <a href={article.url} target="_blank" rel="noopener">
          <h2> {article.title}</h2>
        </a>

        <p className="text-muted">{article.content}</p>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="img-fluid"
        ></img>
      </div>
    </div>
  );
}
