import { useEffect, useState } from "react";

import ArticleBoxesTop from "./components/ArticleBoxesTop.js";

import TelexAPI from "../../api/TelexAPI.js";

function Home({ setLoadingStatus }) {
  const [articleBoxes, setArticleBoxes] = useState(null);

  useEffect(() => {
    const fetchArticleBoxesDataFromTelexAPI = async () => {
      const { boxes, error } = await TelexAPI.getIndexBoxes();

      if (error) return;

      setArticleBoxes(boxes);
      setLoadingStatus(false);
    };

    fetchArticleBoxesDataFromTelexAPI();
  }, [setLoadingStatus]);

  return (
    <>
      {articleBoxes && (
        <div className="article-boxes--wrapper">
          <ArticleBoxesTop articleBoxes={articleBoxes.topBoxItems} />
        </div>
      )}
    </>
  );
}

export default Home;
