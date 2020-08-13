import React from 'react';
import { NavLink } from 'react-router-dom';

export var Hor = 'https://source.unsplash.com/700x500/?portrait,woman';
export var HorM = 'https://source.unsplash.com/700x500/?portrait,man';
export var Vert = 'https://source.unsplash.com/500x700/?portrait';

export const Header = () => (
	<header className="absolute z-3 mt3 mt2-m ph2-m ph3  w-100 flex justify-between">
		<NavLink
			to="/"
			className="flex flex-column-m optima tracked near-white fw5 f3 ttu"
		>
			<p className="pr2">Portraits</p>
			<p>boutique</p>
		</NavLink>
		<div className="flex items-end-m flex-column-m optima near-white f3 fw3 h2">
			<div className="flex items-end-m pb2-m flex-column-m ">
				<NavLink
					to="/portfolio"
					className="ttu link near-white hover-fire-opal  pr3 pr0-m"
				>
					portfolio
				</NavLink>
				<NavLink
					to="/info"
					className="link near-white hover-fire-opal  pr3 pr0-m pb2-m"
				>
					INFO
				</NavLink>
				<IgW />
			</div>
		</div>
	</header>
);

export const Main = ({ children }) => (
	<section className="w-100 overflow-hidden ph3 ph2-m center mt55 mb4">
		{children}
	</section>
);

export const Img = (props) => (
	<div className={props.class}>
		<img src={props.src} alt="img" className="whale" />
		{props.children}
	</div>
);

export const Rov = (props) => (
	<div className="flex w-100 justify-between pb3">
		<div className="w-33 pr2 dim link">
			<img src={props.one} alt="img" className="whale" />
		</div>
		<div className="w-34 pl2 pr2 dim link">
			<img src={props.two} alt="img" className="whale" />
		</div>
		<div className="w-33 pl2 dim link">
			<img src={props.three} alt="img" className="whale" />
		</div>
	</div>
);
export const Roh = (props) => (
	<div className="flex w-100 justify-between pb3">
		<div className="w-50 pr2 dim link">
			<img src={props.one} alt="img" className="whale" />
		</div>

		<div className="w-50 pl2 dim link">
			<img src={props.two} alt="img" className="whale" />
		</div>
	</div>
);

export const IgW = () => (
	<a
		href="https://www.instagram.com/portraits.boutique"
		target="_blank"
		rel="noopener noreferrer"
		className="dib"
	>
		<svg x="0px" y="0px" width="22px" height="22px" id="insta">
			<path
				id="instagram"
				fill="#ffff"
				d="M14,0H6C2.7,0,0,2.7,0,6V14c0,3.3,2.7,6,6,6H14c3.3,0,6-2.7,6-6V6C20,2.7,17.3,0,14,0z M18,14c0,2.2-1.8,3.9-3.9,3.9H6
C3.8,18,2,16.2,2,14V6C2,3.8,3.8,2,6,2H14C16.2,2,18,3.8,18,6V14L18,14z"
			/>
			<path
				id="instagram"
				fill="#ffff"
				d="M10,4.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S12.9,4.8,10,4.8z M10,13.2c-1.7,0-3.2-1.4-3.2-3.2
S8.3,6.8,10,6.8c1.7,0,3.2,1.4,3.2,3.2C13.2,11.7,11.7,13.2,10,13.2z"
			/>
			<circle id="instagram" fill="#ffff" cx="15.2" cy="4.9" r="1.2" />
		</svg>
	</a>
);
