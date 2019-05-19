import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { themeSettings } from '../lib/settings';
import MetaTags from '../components/metaTags';
import CustomProducts from '../components/products/custom';
import HomeSlider from '../components/homeSlider';
import BestSelling from '../components/bestSelling';
import Headerbadge from '../components/headerbadge';
// import img from '../../assets/images/anime/Itachi_Uchiha_2_Half_Sleeve-Black_300x.png';

const IndexContainer = props => {
	const {
		addCartItem,
		state: { pageDetails, settings }
	} = props;

	const data1 = null;
	// const data1 = [
	// 	{
	// 		href: '/trainers/demo-mens-7-running-shoes',
	// 		src:
	// 			'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1558273686/Naruto_Jiraya_Half_Sleeve-Black_1024x1024.png',
	// 		name: 'Naruto shirt for men',
	// 		price: '$200'
	// 	},
	// 	{
	// 		href: '/trainers/demo-mens-7-running-shoes',
	// 		src:
	// 			'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658382/Roronoa_Zoro_Half_Sleeve-_White_300x.png',
	// 		name: 'demo',
	// 		price: '$200'
	// 	},
	// 	{
	// 		href: '/trainers/demo-mens-7-running-shoes',
	// 		src:
	// 			'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658382/Kame_Symbol_Half_Sleeve-_Red_300x.png',
	// 		name: 'demo',
	// 		price: '$200'
	// 	},
	// 	{
	// 		href: '/trainers/demo-mens-7-running-shoes',
	// 		src:
	// 			'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1558273747/It_s_An_Anime_Things_Half_Sleeve-Navy_Blue_300x.png',
	// 		name: 'demo',
	// 		price: '$200'
	// 	}
	// ];


	const data2 = [
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/Manchester_United_2_Half_Sleeve-Red_300x.png',
			name: 'Naruto shirt for men',
			price: '$200'
		},
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/Manchester_City_Half_Sleeve-Navy_Blue_300x.png',
			name: 'demo',
			price: '$200'
		},
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/Real_Madrid_Half_Sleeve-Black_300x.png',
			name: 'demo',
			price: '$200'
		},
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658403/PSG_Half_Sleeve-_White_300x.png',
			name: 'demo',
			price: '$200'
		}
	];
	const data3 = [
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658418/Team_Navi_Half_Sleeve-_Yellow_300x.png',
			name: 'Naruto shirt for men',
			price: '$200'
		},
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658418/Thresh_Hooked_Half_Sleeve-Black-min_300x.png',
			name: 'demo',
			price: '$200'
		},
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658418/CS_GO_Fnatic_Half_Sleeve-Navy_Blue_300x.png',
			name: 'demo',
			price: '$200'
		},
		{
			href: '/trainers/demo-mens-7-running-shoes',
			src:
				'https://res.cloudinary.com/dmjvm8vzc/image/upload/v1557658418/LOL_Keywords-Half_Sleeve_White-min_300x.png',
			name: 'demo',
			price: '$200'
		}
	];

	return (
		<Fragment>
			<MetaTags
				title={pageDetails.meta_title}
				description={pageDetails.meta_description}
				canonicalUrl={pageDetails.url}
				ogTitle={pageDetails.meta_title}
				ogDescription={pageDetails.meta_description}
			/>

			{/* <HomeSlider images={themeSettings.home_slider} /> */}
			<Headerbadge />
			<BestSelling data={data1} section='Anime' />
			<BestSelling data={data2} section='Football' />
			<BestSelling data={data3} section='Gaming' />

			{pageDetails.content &&
				pageDetails.content.length > 10 && (
					<section className="section">
						<div className="container">
							<div className="content">
								<div
									dangerouslySetInnerHTML={{
										__html: pageDetails.content
									}}
								/>
							</div>
						</div>
					</section>
				)}

			<section className="section">
				<div className="container">
					<div className="title is-4 has-text-centered">
						{themeSettings.home_products_title}
					</div>
					<CustomProducts
						sku={themeSettings.home_products_sku}
						sort={themeSettings.home_products_sort}
						limit={themeSettings.home_products_limit}
						settings={settings}
						addCartItem={addCartItem}
					/>
				</div>
			</section>
		</Fragment>
	);
};

IndexContainer.propTypes = {
	addCartItem: PropTypes.func.isRequired,
	state: PropTypes.shape({
		settings: PropTypes.shape({}),
		pageDetails: PropTypes.shape({})
	}).isRequired
};

export default IndexContainer;
