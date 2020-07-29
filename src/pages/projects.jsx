import React from 'react';
import {
	Main,
	Five7,
	Seven5,
	Hor,
	Flex,
	Vert,
	ProH,
	Pro,
	Compare,
	Img,
} from '../components/components';

export const Mia = () => (
	<Main>
		<ProH title="Valeria" subtitle="milano - 2015" />
		<Five7
			container="w-60 w-100-m center mb6"
			background="../img/013.jpg"
			desc="dn"
		/>

		<Compare
			container="flex w-60 w-100-m center mb6"
			left="../img/014.jpg"
			right="../img/015.jpg"
			slider="0.45"
		/>
		<Five7 container="w-30 w-50-m mb5" background="../img/018.jpg" desc="dn" />
	</Main>
);
export const Francesco = () => (
	<Main>
		<ProH title="Francesco" subtitle="milano - 2015" />
		<Flex class="flex-column-m">
			<Img class="w-50 w-100-m mr2 mr0-m mb3-m" src="../img/020.jpg" />
			<Img class="w-50 w-100-m ml2 ml0-m" src="../img/021.jpg" />
		</Flex>
	</Main>
);
export const Nicola = () => (
	<Main>
		<Compare
			container="flex w-60 w-90-m center"
			left="../img/012.jpg"
			right={Vert}
		/>
	</Main>
);
