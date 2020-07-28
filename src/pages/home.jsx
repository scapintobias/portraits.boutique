import React from 'react';
import { NavLink } from 'react-router-dom';
import { IgW, Main, Img, Flex, Header } from '../components/components';

export const Home = () => (
	<main>

		<div className="overlay z-2" />
		<img
			src="./img/nasa.jpg"
			alt="home"
			className=" overflow-hidden obj-cover border-box z-10"
		/>
	</main>
);
