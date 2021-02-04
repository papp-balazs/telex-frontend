import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ArticleBox.css";

function ArticleBox({ article, showImage = false }) {
  const [articleURL, setArticleURL] = useState("");

  const {
    slug,
    pubDate,
    live,
    position,
    authors,
    mainSuperTag,
    title,
    lead,
    imageSrc,
  } = article;

  useEffect(() => {
    // The date from the API comes in minutes, but we need to convert it to
    // miliseconds to properly use Date class.
    const convertedPubDate = new Date(pubDate * 1000);
    const pubDateYear = convertedPubDate.getFullYear();
    // First, we fetch the month index from the Date. Then we need to add 1 to
    // it, because the first month's index is 0.
    // Then we convert it to a String and add a "0" char at the start of it:
    // - It will be "02" in case of February.
    // - It will be "011" in case of November.
    // After it, we only need the last two chars of the string to have the
    // correct format.
    const pubDateMonth = (
      "0" + (convertedPubDate.getMonth() + 1).toString()
    ).slice(-2);
    // We do the same for the days as we do for the months.
    const pubDateDay = ("0" + convertedPubDate.getDate().toString()).slice(-2);

    // Then we create the final URL.
    // "/super-tag/year/month/day/slug"
    setArticleURL(
      `/${mainSuperTag.slug}/${pubDateYear}/${pubDateMonth}/${pubDateDay}/${slug}`
    );
  }, [pubDate, mainSuperTag, slug]);

  return (
    <div
      className={`article-box ${
        showImage && imageSrc ? "illustrated" : "normal"
      }`}
    >
      <div className="article-box--top">
        {showImage && imageSrc && (
          <Link to={articleURL}>
            <img src={`https://telex.hu${imageSrc}`} alt={title} />
          </Link>
        )}

        <Link to={`/${mainSuperTag.slug}`}>
          <span className="super-tag">{mainSuperTag.name}</span>
        </Link>
      </div>
      <div className="article-box--bottom">
        <Link to={articleURL} className="article-box--title">
          <h1>{title}</h1>
        </Link>

        {position === 0 && (
          <div className="authors">
            {authors.map((author, index) => (
              <Fragment key={index}>
                <Link to={`/author/${author.slug}`}>{author.name}</Link>
                {index !== authors.length - 1 && ", "}
              </Fragment>
            ))}
          </div>
        )}

        {lead && <p>{lead}</p>}
      </div>
    </div>
  );
}

export default ArticleBox;
