import React from "react";
export default function Article({ article }) {
  return (
    <div className="Article border m-2">
      <a href={article.url} target="_blank" rel="noreferrer">
        <h2> {article.title}</h2>
      </a>
      <p className="text-muted">{article.content}</p>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="img-fluid"
      ></img>
    </div>
  );
}
