import React from 'react';
import {
	Main,
	Five7,
	Seven5,
	Hor,
	Vert,
	HorM,
	Compare,
} from '../components/components';

export const Mia = () => (
	<Main>
		<Five7 container="w-50 w-100-m center mb4" background={Vert} desc="dn" />
		<Seven5 container="w-80 w-100-m center mb5" background={Hor} desc="dn" />
	</Main>
);

export const Nicola = () => (
	<Main>
		<Compare container="flex w-80 center" left="../img/012.jpg" right={HorM} />
	</Main>
);
