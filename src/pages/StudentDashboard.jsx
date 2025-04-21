/** @format */

// src/pages/StudentDashboard.js

import React, { useState } from 'react';

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
		title: '03. How To Fill Sales TAX Every 3 months - LLC Tax Filling',
		url: 'https://drive.google.com/file/d/1dw2mVU_8wUE42x_rPy5MaNe40OuGhucm/preview',
	},
	{
		title: '04. How To Open Amazon Seller Account From Bangladesh',
		url: 'https://drive.google.com/file/d/17fGwIp68FElQk3rmF2EJ-nelnhckn2bX/preview',
	},
	// 👉 Add all 50+ videos here like above...
];

const StudentDashboard = () => {
	const [selectedVideo, setSelectedVideo] = useState(videos[0]);

	return (
		<div style={{ display: 'flex', padding: 20 }}>
			{/* Video list */}
			<div style={{ width: '30%', marginRight: 20 }}>
				<h3>Video Lessons</h3>
				<ul style={{ listStyle: 'none', padding: 0 }}>
					{videos.map((video, index) => (
						<li key={index}>
							<button
								style={{
									width: '100%',
									marginBottom: 10,
									padding: 10,
									textAlign: 'left',
									cursor: 'pointer',
									border: '1px solid #ccc',
									borderRadius: 5,
									background: video.url === selectedVideo.url ? '#eef' : '#fff',
								}}
								onClick={() => setSelectedVideo(video)}>
								{video.title}
							</button>
						</li>
					))}
				</ul>
			</div>

			{/* Video player */}
			<div style={{ width: '70%' }}>
				<h3>{selectedVideo.title}</h3>
				<iframe
					src={selectedVideo.url}
					title='Video Player'
					width='100%'
					height='480'
					allow='autoplay'
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default StudentDashboard;
