import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Loading from './components/Loading.js';

import Home from './pages/Home';

import './App.css';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingFadingOut, setIsLoadingFadingOut] = useState(false);

	const handleLoadingStatusChange = loadingStatus => {
		setIsLoadingFadingOut(true);
		setTimeout(() => setIsLoading(loadingStatus), 1000);
	}

	return (
		<Router>
			{isLoading && <Loading isFadingOut={isLoadingFadingOut} />}

			<Switch>
				<Route path="/">
					<Home
						setLoadingStatus={handleLoadingStatusChange}
					/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
