import React from 'react';
import { Slider } from '../components/components';

export const Home = () => (
	<main>
		<div className="overlay o-10 z-2"></div>
		<Slider>
			<div data-src="./img/012.jpg" />
			<div data-src="./img/013.jpg" />
			<div data-src="./img/020.jpg" />
			<div data-src="./img/014.jpg" />
			<div data-src="./img/018.jpg" />
			<div data-src="./img/015.jpg" />
		</Slider>
	</main>
);
