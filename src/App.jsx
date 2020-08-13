import React, { useEffect, useContext } from 'react';
import { __RouterContext } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import './type.css';
import './index.css';

import { Home, Portfolio, Info } from './pages';
import { Header } from './components/components';

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
			<Route path="/portfolio" exact component={Portfolio} />
			<Route path="/info" exact component={Info} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<SimpleReactLightbox>
				<ScrollToTop>
					<Header />
					<div style={{ overflow: 'hidden' }}>
						<PageContent />
					</div>
				</ScrollToTop>
			</SimpleReactLightbox>
		</Router>
	);
}
