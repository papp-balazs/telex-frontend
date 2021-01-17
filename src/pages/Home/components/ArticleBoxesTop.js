import React from 'react';

function ArticleBoxesTop({ articleBoxes = [] }) {
	return (
		<div className="article-boxes-wrapper">
			{articleBoxes.map((articleBox, index) => (
				<h1 key={index}>{articleBox.title}</h1>
			))}
		</div>
	);
}

export default ArticleBoxesTop;
