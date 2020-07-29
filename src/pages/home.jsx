import React from 'react';
import { Slider } from '../components/components';

export const Home = () => (
	<main>
		<div className="overlay z-2"></div>
		<Slider>
			<div data-src="./img/012.jpg" />
			<div data-src="./img/013.png" />
		</Slider>
	</main>
);

// <img
// 			src="./img/012.jpg"
// 			alt="home"
// 			className=" overflow-hidden obj-cover border-box z-1"
// 		/>
