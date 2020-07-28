import React from 'react';
import { NavLink } from 'react-router-dom';
import { IgB } from './components';

export const PortHead = () => (
	<header className=" z-max mt3 mt2-m ph2-m ph3 mt3 mt2-m ph2-m w-100 flex justify-between">
		<NavLink
			to="/"
			className="flex flex-column-m optima tracked black fw5 f3 hover-gold"
		>
			<p className="pr2">SCAPIN</p>
			<p>TOBIAS</p>
		</NavLink>
		<div className="optima flex black f3 fw3">
			<div className="flex items-end-m flex-column-m optima white f3 fw3 ">
				<div className="flex items-end-m pb2-m flex-column-m ">
					<NavLink to="/progetti" className="ttu link silver hover-black pr3 pr0-m">
						progetti
					</NavLink>
					<NavLink to="/info" className="link black hover-gold pr3 pr0-m pb1-m">
						INFO
					</NavLink>
					<IgB />
				</div>
			</div>
		</div>
	</header>
);

export const InfoHead = () => (
	<header className=" z-max mt3 mt2-m ph2-m ph3 mt3 mt2-m ph2-m ph3 w-100 flex justify-between">
		<NavLink to="/" className="flex flex-column-m optima tracked black fw5 f3 ">
			<p className="pr2">SCAPIN</p>
			<p>TOBIAS</p>
		</NavLink>
		<div className="optima flex black f3 fw3">
			<div className="flex items-end-m flex-column-m optima white f3 fw3 ">
				<div className="flex items-end-m pb2-m flex-column-m ">
					<NavLink to="/progetti" className="ttu link black hover-gold pr3 pr0-m">
						progetti
					</NavLink>
					<NavLink to="/info" className="link silver hover-black pr3 pr0-m pb1-m">
						INFO
					</NavLink>
					<IgB />
				</div>
			</div>
		</div>
	</header>
);
