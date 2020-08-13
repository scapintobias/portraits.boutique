import React from 'react';
import { Main, Roh, Rov } from '../components/components';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
	settings: {
		disablePanzoom: true,
		autoplaySpeed: 3000,
		overlayColor: 'rgba(0, 0, 0, 0.9)',
	},
	caption: { showCaption: false },
	buttons: {
		backgroundColor: 'rgba(0,0,0,0)',
		showAutoplayButton: true,
		showCloseButton: true,
		showDownloadButton: false,
		showFullscreenButton: false,
		showNextButton: true,
		showPrevButton: true,
		showThumbnailsButton: false,
	},
	thumbnails: { showThumbnails: false },
	progressBar: {},
};

export const Portfolio = () => (
	<main>
		<Main>
			<SRLWrapper options={options}>
				<Rov one="./img/250.jpg" two="./img/251.jpg" three="./img/252.jpg" />
				<Roh one="./img/253.jpg" two="./img/254.jpg" />
				<Roh one="./img/265.jpg" two="./img/266.jpg" />
				<Rov one="./img/262.jpg" two="./img/264.jpg" three="./img/263.jpg" />
				<Rov one="./img/256.jpg" two="./img/257.jpg" three="./img/277.jpg" />
				<Rov one="./img/259.jpg" two="./img/269.jpg" three="./img/258.jpg" />
				<Rov one="./img/270.jpg" two="./img/271.jpg" three="./img/283.jpg" />
				<Rov one="./img/284.jpg" two="./img/285.jpg" three="./img/286.jpg" />
				<Rov one="./img/272.jpg" two="./img/273.jpg" three="./img/274.jpg" />
				<Rov one="./img/275.jpg" two="./img/280.jpg" three="./img/281.jpg" />
				<Roh one="./img/282.jpg" two="./img/276.jpg" />
				<Rov one="./img/278.jpg" two="./img/279.jpg" three="./img/255.jpg" />
				<Roh one="./img/249.jpg" two="./img/268.jpg" />
				<Rov one="./img/267.jpg" two="./img/261.jpg" three="./img/260.jpg" />
			</SRLWrapper>
		</Main>
	</main>
);
