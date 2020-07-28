import React from 'react';
import { PortHead } from './components/header';
// import { Link } from 'react-router-dom';

import { Main, Img, ProH } from './components/components';

export const Yape = () => (
	<main>
		<PortHead />
		<Main>
			<ProH title="Yape" subtitle="immagine coordinata - 2018">
				<video src="../img/yape/yape.mp4" className="whale" autoPlay />
			</ProH>

			<div className=" bg-light-gray w-100 mb7">
				<div className="flex w-100 flex-column-m justify-between">
					<div className="optima pa4 f3 fw4">Schemi preparatori</div>
					<Img src="../img/yape/yapetype.jpg" class=" ma4 w-60 b--white ba bw5" />
				</div>
			</div>
		</Main>
	</main>
);
