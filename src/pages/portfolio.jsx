import React from 'react';
import {
	Main,
	FlexE,
	FlexS,
	Five7L,
	Seven5L,
	Seven5,
	Vert,
	Hor,
	FlexC,
	Five7,
} from '../components/components';

export const Portfolio = () => (
	<main>
		<Main>
			<FlexC>
				<Seven5
					container="w-80 w-100-m mb6"
					background="./img/012.jpg"
					title="Alice"
					desc="db"
				/>
			</FlexC>
			<FlexE>
				<Five7L
					to="/portfolio/mia"
					container="w-40 w-100-m mb5 "
					article="dimm"
					background="./img/013.jpg"
					title="Valeria"
					desc="db"
				/>
			</FlexE>
			<FlexS>
				<Five7L
					to="/portfolio/francesco"
					container="w-70 w-100-m"
					article="dimm"
					background="./img/020.jpg"
					title="Francesco"
					desc="db"
				/>
			</FlexS>
		</Main>
	</main>
);
