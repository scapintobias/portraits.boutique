import React from 'react';
import { InfoHead } from './components/header';
import { Main } from './components/components';

const Br = () => <br></br>;

export const Info = () => (
	<main>
		<InfoHead />
		<Main>
			<section className="flex db w-100 flex-column-m optima f3 lh-copy pb7 mb3 bb">
				<div className="w-50 w-100-m mb5">
					<p>Ma in realtà.</p>
					<p className="mb3">In parole povere.</p>
					<p className="mb3">Tu. Cosa fai?</p>
				</div>
				<div className="w-50 w-100-m">
					<p>Grafica e Fotografia</p>
					<p className="mb3">Entrambe sia analogiche che digitali</p>
					<p className="mb3">
						Mi posso occupare del vostro logo, del vostro catalogo, del vostro sito —
						sia che abbiate un bar in centro a Milano, o una cantina nel Veneto
						Orientale.
					</p>
					<p>
						Posso scattarvi delle foto, che siano di prodotto, ritratti e sì, persino
						al vostro matrimonio!
					</p>
					<p className="mt3">Qual è la conseguenza?</p>
					<p className="mb5">Tutto mantiene una qualità costante.</p>
					<p className="orange">Ma quanto costa?</p>
					<p className="mt3">Dipende solo da voi, in base a cosa cercate. </p>
					<p className="mt3">
						Sia una{' '}
						<a
							href="https://www.alvolante.it/listino_auto/fiat-panda"
							target="_blank"
							rel="noopener noreferrer"
							className="dib link black hover-blue underline"
						>
							Panda
						</a>{' '}
						che una{' '}
						<a
							href="https://www.alvolante.it/listino_auto/lamborghini-aventador"
							target="_blank"
							rel="noopener noreferrer"
							className="dib link black hover-gold underline"
						>
							Lamborghini
						</a>{' '}
						hanno quattro ruote. Forse l'unica cosa in comune.
					</p>
				</div>
			</section>
			<section className="flex flex-column-m justify-between pb7 mb2 bb">
				<div className="w-40 w-100-m mr0-m mb5 h7 mr2 overflow-hidden">
					<img src="./img/02.png" alt="ritratto" className="obj-card" />
				</div>
				<div className="optima w-50 w-100-m ml2 lh-copy fw4 f3 black">
					La scelta di questa professione non è stata casuale. Non saprei proprio
					dire quando esattamente sia successo.
					<Br />
					<Br />
					Ho preso la prima reflex in mano ormai quasi vent'anni fa, e ancora mi
					riserva molte soddisfazioni, nonostante non senta più l'odore dello
					sviluppo, o il rumore del tappo di un nuovo rullino. Credo si noti dai miei
					lavori.
					<Br />
					<Br />
					Stessa cosa vale per la matita, compagna instancabile, nonostante ora tutti
					corrano una gara di velocità, a cui non mi sento di appartenere.
					<Br />
					<Br />
					Se cercate prodotti digitali o non, con una qualità, una cura, e una
					consapevolezza quasi artigianale, per cui mezzo secolo fa siamo diventati
					famosi in tutto il mondo, siete nel posto giusto.
					<Br />
					<Br />
					<div className="pt5 measure f4 f5-m fw4">
						Laurea Triennale in Design della Comunicazione
						<Br />
						Laurea Magistrale in Design della Comunicazione
						<Br />
						<span className="fw6 ttu">politecnico di milano</span>
					</div>
				</div>
			</section>
			<div className="mb6 optima measure lh-copy f3 black">
				<p className="fw5 ttu pb4">Contatti</p>
				<a
					href="mailto:info@scapintobias.xyz?subject=Primo contatto"
					className="link hover-gold black blink b pb3"
				>
					Mail
				</a>

				<a href="tel:+393402100166" className="link hover-gold black">
					+39 340 210 0166
				</a>
			</div>
		</Main>
	</main>
);
