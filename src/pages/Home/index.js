import React, { useEffect, useState } from 'react';

import ArticleBoxesTop from './components/ArticleBoxesTop.js';

import TelexAPI from '../../api/TelexAPI.js';

function Home({ setLoadingStatus }) {
	const [articleBoxes, setArticleBoxes] = useState({});
	
	useEffect(() => {
		(async () => {
			const { boxes, error } = await TelexAPI.getIndexBoxes();

			if (error) return;

			setArticleBoxes(boxes);
			setLoadingStatus(false);
		})();
	}, []);

	return (
		<>
			{Object.keys(articleBoxes).length !== 0 && <ArticleBoxesTop
				articleBoxes={articleBoxes.topBoxItems}
			/>}
		</>
	);
}

export default Home;
