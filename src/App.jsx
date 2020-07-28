import React, { useEffect, useContext } from 'react';
import { __RouterContext } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './type.css';
import './index.css';

import { Home, Portfolio, Info, Yape } from './pages';

import { Footer } from './pages/components/components';

function useRouter() {
	return useContext(__RouterContext);
}

function ScrollToTop({ children }) {
	const {
		location: { pathname },
	} = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return children || null;
}

function PageContent() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/progetti" exact component={Portfolio} />
			<Route path="/progetti/yape" exact component={Yape} />
			<Route path="/info" exact component={Info} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<ScrollToTop>
				<div style={{ overflow: 'hidden' }}>
					<PageContent />
				</div>
			</ScrollToTop>
			<Footer />
		</Router>
	);
}
