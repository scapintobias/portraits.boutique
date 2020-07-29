import React from 'react';
import { Main, Five7, Seven5, Hor, Vert } from '../components/components';

const Br = () => (
	<span>
		<br></br>
		<br></br>
	</span>
);

export const Info = () => (
	<main>
		<Main>
			<section className="white bb flex justify-between db w-100 flex-column-m mb3">
				<div className="w-40 w-100-m optima f3 lh-copy mr3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at massa
					hendrerit, porta est sit amet, pulvinar odio. Donec nec tortor varius,
					malesuada lorem ut, elementum felis. Donec tellus urna, bibendum eu massa
					id, auctor rutrum nulla. Sed id urna eu libero cursus commodo semper quis
					nulla. Maecenas vestibulum, ipsum laoreet feugiat volutpat, odio lorem
					sodales ante, ut congue risus mauris quis diam. Quisque ultrices enim vitae
					ligula interdum accumsan. Vestibulum suscipit finibus leo, sit amet
					malesuada diam iaculis a. Quisque eget ornare lorem, eu ultrices libero.
				</div>
				<div className="w-50 w-100-m">
					<Five7 container="w-100" background={Vert} desc="dn" />
				</div>
			</section>
			<section className="flex w-100 flex-column-m  pb3 mb2 bb">
				<div className="flex w-50 w-100-m flex-column">
					<Seven5 container="w-100" background={Hor} desc="dn" />
					<Seven5 container="w-100" background={Hor} desc="dn" />
				</div>
				<div className="optima w-40 self-start w-100-m ml3 ml0-m lh-copy fw4 f3 white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at massa
					hendrerit, porta est sit amet, pulvinar odio. Donec nec tortor varius,
					malesuada lorem ut, elementum felis. Donec tellus urna, bibendum eu massa
					id, auctor rutrum nulla. Sed id urna eu libero cursus commodo semper quis
					nulla. Maecenas vestibulum, ipsum laoreet feugiat volutpat, odio lorem
					sodales ante, ut congue risus mauris quis diam. Quisque ultrices enim vitae
					ligula interdum accumsan. Vestibulum suscipit finibus leo, sit amet
					malesuada diam iaculis a. Quisque eget ornare lorem, eu ultrices libero.
				</div>
			</section>
		</Main>
	</main>
);
