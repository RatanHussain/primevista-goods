/** @format */

// src/pages/AmazonFBAPlaylist.js
import React from 'react';

const videos = [
	{
		title: '01. How To Start Amazon FBA Wholesale Business From Bangladesh',
		url: 'https://drive.google.com/file/d/1UmzH5OoxBVi50H7xVVXNbgF9Ec-im0D_/preview',
	},
	{
		title: '02. How To Create LLC For Amazon FBA Wholesale Business',
		url: 'https://drive.google.com/file/d/1BW8r4OF5dQWFeH4hPtGbiA4OflPRduQN/preview',
	},
	{
		title: '03. How To Fill Sales TAX Every 3 months',
		url: 'https://drive.google.com/file/d/1dw2mVU_8wUE42x_rPy5MaNe40OuGhucm/preview',
	},
	{
		title: '04. How To Open Amazon Seller Account From Bangladesh 2023',
		url: 'https://drive.google.com/file/d/17fGwIp68FElQk3rmF2EJ-nelnhckn2bX/preview',
	},
	// ... continue the rest the same way
];

const AmazonFBAPlaylist = () => {
	return (
		<div style={{ padding: '20px' }}>
			<h2>Amazon FBA Course Videos</h2>
			{videos.map((video, index) => (
				<div key={index} style={{ marginBottom: '40px' }}>
					<h4>{video.title}</h4>
					<iframe
						src={video.url}
						width='100%'
						height='400'
						allow='autoplay'
						frameBorder='0'
						allowFullScreen
						title={video.title}></iframe>
				</div>
			))}
		</div>
	);
};

export default AmazonFBAPlaylist;
