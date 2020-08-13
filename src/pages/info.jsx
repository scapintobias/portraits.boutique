import React, { Component } from 'react';
import { Main } from '../components/components';

class Switch extends Component {
	constructor(props) {
		super(props);
		this.state = { ita: true };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((state) => ({ ita: !state.ita }));
	}

	render() {
		if (this.state.ita) {
			return (
				<div>
					<div
						className=" mb3 f4 bg-black white optima ttu ba pa2 tc w3 link dim"
						onClick={this.handleClick}
					>
						Ita
					</div>

					<div className="white optima measure f3 lh-copy">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at massa
						hendrerit, porta est sit amet, pulvinar odio. Donec nec tortor varius,
						malesuada lorem ut, elementum felis. Donec tellus urna, bibendum eu massa
						id, auctor rutrum nulla. Sed id urna eu libero cursus commodo semper quis
						nulla. Maecenas vestibulum, ipsum laoreet feugiat volutpat, odio lorem
						sodales ante, ut congue risus mauris quis diam. Quisque ultrices enim
						vitae ligula interdum accumsan. Vestibulum suscipit finibus leo, sit amet
						malesuada diam iaculis a. Quisque eget ornare lorem, eu ultrices libero.
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div
						className="mb3 f4 bg-black white optima ttu ba pa2 tc w3 link dim"
						onClick={this.handleClick}
					>
						Eng
					</div>

					<div className="red optima measure f3 lh-copy">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at massa
						hendrerit, porta est sit amet, pulvinar odio. Donec nec tortor varius,
						malesuada lorem ut, elementum felis. Donec tellus urna, bibendum eu massa
						id, auctor rutrum nulla. Sed id urna eu libero cursus commodo semper quis
						nulla. Maecenas vestibulum, ipsum laoreet feugiat volutpat, odio lorem
						sodales ante, ut congue risus mauris quis diam. Quisque ultrices enim
						vitae ligula interdum accumsan. Vestibulum suscipit finibus leo, sit amet
						malesuada diam iaculis a. Quisque eget ornare lorem, eu ultrices libero.
					</div>
				</div>
			);
		}
	}
}

export const Info = () => (
	<Main>
		<Switch />
	</Main>
);
