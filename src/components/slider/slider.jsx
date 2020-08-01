import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './styles.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = ({ children }) => (
	<AutoplaySlider
		play={true}
		organicArrows={false}
		cancelOnInteraction={false}
		interval={3000}
		className="vh-100"
	>
		{children}
	</AutoplaySlider>
);
