import { useEffect, useState } from "react";

import "./ArticleBoxesTop.css";

import ArticleBox from "../../../components/ArticleBox";

function ArticleBoxesTop({ articleBoxes }) {
  const [leftColumnArticles, setLeftColumnArticles] = useState([]);
  const [middleColumnArticle, setMiddleColumnArticle] = useState([]);
  const [rightColumnArticles, setRightColumnArticles] = useState([]);

  useEffect(() => {
    setLeftColumnArticles(
      articleBoxes.filter(
        (article) => article.position === 1 || article.position === 2
      )
    );
    setMiddleColumnArticle(
      articleBoxes.filter((article) => article.position === 0)
    );
    setRightColumnArticles(
      articleBoxes.filter((article) => article.position > 3)
    );
  }, [articleBoxes]);

  return (
    <div className="article-boxes__top">
      <div className="article-boxes__top--left-column">
        {leftColumnArticles.map((article, index) => (
          <ArticleBox key={index} article={article} showImage />
        ))}
      </div>

      <div className="article-boxes__top--middle-column">
        {middleColumnArticle.map((article, index) => (
          <ArticleBox key={index} article={article} showImage />
        ))}
      </div>

      <div className="article-boxes__top--right-column">
        {rightColumnArticles.map((article, index) => (
          <ArticleBox key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticleBoxesTop;
