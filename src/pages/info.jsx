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
			<section className="white bb flex justify-between db w-100 flex-column-m pb4 mb4">
				<div className="w-40 w-100-m optima f3 lh-copy mr3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at massa
					hendrerit, porta est sit amet, pulvinar odio. Donec nec tortor varius,
					malesuada lorem ut, elementum felis. Donec tellus urna, bibendum eu massa
					id, auctor rutrum nulla. Sed id urna eu libero cursus commodo semper quis
					nulla. Maecenas vestibulum, ipsum laoreet feugiat volutpat, odio lorem
					sodales ante, ut congue risus mauris quis diam. Quisque ultrices enim vitae
					ligula interdum accumsan. Vestibulum suscipit finibus leo, sit amet
					malesuada diam iaculis a. Quisque eget ornare lorem, eu ultrices libero.
					<Br />
					Mauris lorem diam, vulputate quis rutrum sed, lobortis vel ipsum.
					Pellentesque tellus lorem, accumsan in pretium id, dictum eu massa. Nulla
					diam orci, bibendum vel posuere in, tempor ut mi. Integer venenatis posuere
					nisi, ac consequat ipsum consequat at. Donec et hendrerit elit, et
					consectetur odio. Aenean quis est non nibh ultrices maximus a pellentesque
					nisl. Ut fermentum diam eget enim fermentum, nec rhoncus ipsum lobortis.
					Aliquam id ex turpis. In enim quam, maximus non tortor non, dictum ultrices
					est. Integer volutpat volutpat magna. Suspendisse potenti. Nulla at ex
					tortor. Duis lacus arcu, interdum quis auctor sit amet, mattis et dolor.
					<Br />
					Aliquam augue nisi, consectetur eu dui nec, maximus facilisis orci.
					Curabitur scelerisque nibh ac est ornare, eu mollis magna lacinia. Nam
					porta ultricies eros, laoreet tempus justo laoreet sed. Aliquam vitae magna
					lorem. Aenean sed nisi sed neque vehicula finibus. Mauris posuere tempus
					egestas. Quisque vitae erat eleifend, efficitur tellus eu, varius justo.
					Aenean condimentum nisl eget augue molestie, quis dictum erat accumsan. Ut
					sem nisi, vehicula id pharetra sed, posuere vel velit. Aenean non mauris
					lacus. In ipsum ante, tempus ac ligula et, finibus eleifend lectus.
				</div>
				<div className="w-50 w-100-m">
					<Five7 container="w-100" background={Vert} desc="dn" />
				</div>
			</section>
			<section className="flex w-100 flex-column-m  pb3 mb2 bb">
				<div className="flex w-50 w-100-m flex-column">
					<Seven5
						container="w-100 mb4"
						background={Hor}
						desc="dn"
					/>
					<Seven5 container="w-100" background={Hor} desc="dn" />
				</div>
				<div className="optima w-40 self-start w-100-m ph4 lh-copy fw4 f3 white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at massa
					hendrerit, porta est sit amet, pulvinar odio. Donec nec tortor varius,
					malesuada lorem ut, elementum felis. Donec tellus urna, bibendum eu massa
					id, auctor rutrum nulla. Sed id urna eu libero cursus commodo semper quis
					nulla. Maecenas vestibulum, ipsum laoreet feugiat volutpat, odio lorem
					sodales ante, ut congue risus mauris quis diam. Quisque ultrices enim vitae
					ligula interdum accumsan. Vestibulum suscipit finibus leo, sit amet
					malesuada diam iaculis a. Quisque eget ornare lorem, eu ultrices libero.
					<Br />
					Mauris lorem diam, vulputate quis rutrum sed, lobortis vel ipsum.
					Pellentesque tellus lorem, accumsan in pretium id, dictum eu massa. Nulla
					diam orci, bibendum vel posuere in, tempor ut mi. Integer venenatis posuere
					nisi, ac consequat ipsum consequat at. Donec et hendrerit elit, et
					consectetur odio. Aenean quis est non nibh ultrices maximus a pellentesque
					nisl. Ut fermentum diam eget enim fermentum, nec rhoncus ipsum lobortis.
					Aliquam id ex turpis. In enim quam, maximus non tortor non, dictum ultrices
					est. Integer volutpat volutpat magna. Suspendisse potenti. Nulla at ex
					tortor. Duis lacus arcu, interdum quis auctor sit amet, mattis et dolor.
					<Br />
					Aliquam augue nisi, consectetur eu dui nec, maximus facilisis orci.
					Curabitur scelerisque nibh ac est ornare, eu mollis magna lacinia. Nam
					porta ultricies eros, laoreet tempus justo laoreet sed. Aliquam vitae magna
					lorem. Aenean sed nisi sed neque vehicula finibus. Mauris posuere tempus
					egestas. Quisque vitae erat eleifend, efficitur tellus eu, varius justo.
					Aenean condimentum nisl eget augue molestie, quis dictum erat accumsan. Ut
					sem nisi, vehicula id pharetra sed, posuere vel velit. Aenean non mauris
					lacus. In ipsum ante, tempus ac ligula et, finibus eleifend lectus.
				</div>
			</section>
		</Main>
	</main>
);
