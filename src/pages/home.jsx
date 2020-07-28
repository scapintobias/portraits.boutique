import React from 'react';
import { NavLink } from 'react-router-dom';
import { IgW, Main, Img, Flex } from './components/components';

export const Home = () => (
	<main>
		<div>
			<header className="absolute z-max  mt3 mt2-m ph2-m ph3 pb5 w-100 flex justify-between">
				<div className="flex flex-column-m optima tracked white fw5 f3 ">
					<p className="pr2">SCAPIN</p>
					<p>TOBIAS</p>
				</div>
				<div className="flex items-end-m flex-column-m optima white f3 fw3 ">
					<div className="flex items-end-m pb2-m flex-column-m ">
						<NavLink to="/progetti" className="ttu link white hover-gold pr3 pr0-m">
							progetti
						</NavLink>
						<NavLink to="/info" className="link white hover-gold pr3 pr0-m pb2-m">
							INFO
						</NavLink>
						<IgW />
					</div>
				</div>
			</header>
			<a href="#content" className="whale z-2">
				<div className="overlay z-2" />
				<img
					src="./img/nasa.jpg"
					alt="home"
					className=" overflow-hidden obj-cover border-box z-10"
				/>
			</a>
		</div>
		<span id="content" />
		<Main>
			<div className="flex db w-100 flex-column optima f3 lh-copy mb6">
				<div className="self-end mr3">
					<p>Le anatre depongono le loro uova in silenzio.</p>
					<p>Le galline invece schiamazzano come impazzite.</p>
					<p className="mt3">Qual è la conseguenza?</p>
					<p className="mb3">Tutto il mondo mangia uova di gallina.</p>
					<p className="tr f4 silver">Henry Ford</p>
				</div>
			</div>
			<NavLink to="/progetti/yape">
				<Img src="./img/ypae.png" class="w-50 w-100-m mt4 pb3 dim" />
				<p className="optima f3 black fw5 pb2">Yape Srl</p>
				<p className="optima f5 silver fw4">Immagine coordinata, 2018</p>
			</NavLink>
			<section className="w-100 h5" />

			<NavLink to="/progetti/yape" className="mb5">
				<div className="flex pb3">
					<div className="bg-silver w-33 h8 h5-m hide-child overflow-hidden">
						<img
							className="child cover overflow-hidden"
							alt="img"
							src="./img/ypae.png"
						/>
					</div>
					<div className="bg-silver w-33 mh3 h8 h5-m hide-child overflow-hidden">
						<img
							className="child cover overflow-hidden"
							alt="img"
							src="./img/ypae.png"
						/>
					</div>
					<div className="bg-silver w-33 h8 h5-m hide-child overflow-hidden">
						<img
							className="child cover overflow-hidden"
							alt="img"
							src="./img/ypae.png"
						/>
					</div>
				</div>
				<p className="optima f3 black fw5 pb2">Parole Prigioniere</p>
				<p className="optima f5 silver fw4">Mostra fotografica, EXPO 2015</p>
			</NavLink>

			<section className="w-100 h5" />

			<NavLink to="/progetti/yape" className="db w-80 h8">
				<div className="bg-silver mb3 whale dim" />
				<p className="optima f3 black fw5 pb2">Ritratti</p>
				<p className="optima f5 silver fw4">Luci e ombre, 2008—</p>
			</NavLink>
			<section className="w-100 h7 mv4" />

			<NavLink to="/progetti/yape" className="h7">
				<section className="db w-90 mb7 flex fr static">
					<div className="db w-50 mr2 ">
						<div className="bg-silver h6 mb3 dim" />
						<p className="optima f3 black fw5 pb2 dim">Parole Prigioniere</p>
						<p className="optima f5 silver fw4">Mostra fotografica, EXPO 2015</p>
					</div>
					<div className="db w-50 ml2 ">
						<div className="bg-silver h6 mb3 dim" />
						<p className="optima f3 black fw5 pb2">Parole Prigioniere</p>
						<p className="optima f5 silver fw4">Mostra fotografica, EXPO 2015</p>
					</div>
				</section>
			</NavLink>
			<section className="w-100 h5 mb2 bb" />
			<Flex class="justify-between flex-column-m optima mb6 h-auto">
				<div className="w-100-m  w-33 h7 db h-auto-m mb4-m">
					<p className="f2 fw5 pb4">Fotografia</p>
					<p className="f3 fw4 pb2">Ritratto</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						In studio, all'aperto, singoli, di gruppo, a pellicola o in digitale, per
						uso personale o per social network, pubblicazioni, etc
					</p>
					<p className="f3 fw4 pb2">Prodotti</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Adv, e-commerce, contenuti per siti web
					</p>
					<p className="f3 fw4 pb2">Matrimoni</p>
					<p className="f4 silver fw4 pb2 w-80 lh-copy">
						A pellicola o in digitale, su prenotazione, un numero limitato durante
						l'anno
					</p>
				</div>
				<div className="w-100-m w-33 h7 db h-auto-m mb4-m">
					<p className="f2 fw5 pb4">Design</p>
					<p className="f3 fw4 pb2">Immagine coordinata</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Marchio, logo, logotipo, manuale d'immagine coordinata
					</p>
					<p className="f3 fw4 pb2">Materiale editoriale</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Cataloghi, riviste, impaginati
					</p>
					<p className="f3 fw4 pb2">Mostre e fiere</p>
					<p className="f4 silver fw4 pb2 w-80">
						Progettazione di allestimenti e materiale promozionale
					</p>
				</div>
				<div className="w-100-m w-33 h7 h-auto-m mb4-m">
					<p className="f2 fw5 pb4">Digitale</p>
					<p className="f3 fw4 pb2">Siti web, App</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Progettazione di siti web e applicazioni, di ogni ordine di complessità
					</p>
					<p className="f3 fw4 pb2">Multimedia</p>
					<p className="f4 silver fw4 pb4 w-80 lh-copy">
						Realizzazione di video promozionali, sia in ripresa che in motion
						graphics, o la combinazione tra le due.
					</p>
				</div>
			</Flex>
		</Main>
	</main>
);
