import React from 'react';
import {
	Header,
	Main,
	Place,
	Five7,
	Seven5,
	Flex,
	FlexE,
	FlexS,
} from '../components/components';
import { NavLink } from 'react-router-dom';

export const Portfolio = () => (
	<main>
		<Main>
			<FlexE>
				<Five7
					to="/progetti/yape"
					container="w-40 w-100-m mb5"
					article="dim"
					background="./img/nasa.jpg"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
					desc="db"
				/>
			</FlexE>
			<FlexS>
				<Seven5
					to="/progetti/yape"
					container="w-80 w-100-m"
					article="dim"
					background="./img/nasa.jpg"
					title="Un nuovo volto ad un drone"
					group="immagine coordinata"
					anno="2018"
					desc="dn"
				/>
			</FlexS>
		</Main>
	</main>
);
