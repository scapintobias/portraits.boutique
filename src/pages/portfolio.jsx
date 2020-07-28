import React from 'react';
import {
	Main,
	FlexE,
	FlexS,
	Five7L,
	Seven5L,
	Vert,
	Hor,
} from '../components/components';

export const Portfolio = () => (
	<main>
		<Main>
			<FlexE>
				<Five7L
					to="/portfolio/mia"
					container="w-40 w-100-m mb5"
					article="dim"
					background={Vert}
					title="Valeria"
					group="milan"
					anno="2015"
					desc="db"
				/>
			</FlexE>
			<FlexS>
				<Seven5L
					to="/portfolio/nicola"
					container="w-80 w-100-m"
					article="dim"
					background={Hor}
					title="Nicola"
					group="milan"
					anno="2018"
					desc="db"
				/>
			</FlexS>
		</Main>
	</main>
);
