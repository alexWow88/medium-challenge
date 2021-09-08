import React from "react";
import "./Article.scss";

const Article = (props) => {

  return (
      <div className="article-block">
        <div className="article-block__left">
          <a href="www.google.com" className="article-block__left__title">{props.articleTitle}</a>
          <a href="www.google.com" className="article-block__left__summary">{props.articleSummary}</a>
          <a href="www.google.com" className="article-block__left__author">{props.authorArticle}</a>
          <p className="dateReadTime">{props.dateReadTime}</p>
        </div>
        <img src={props.articleImage} />
      </div>
  );
};

export default Article;