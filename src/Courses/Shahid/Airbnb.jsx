/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import videos from '../../Data/Shahid/Airbnb';

const Airbnb = () => {
	const [selectedVideo, setSelectedVideo] = useState(videos[0]);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY) {
				setShowNavbar(false); // hide on scroll down
			} else {
				setShowNavbar(true); // show on scroll up
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	const iframeHeight =
		typeof window !== 'undefined' && window.innerWidth < 768 ? '260' : '460';

	return (
		<div className='min-h-screen flex flex-col bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700'>
			{showNavbar && <Navbar />}
			<h1 className='text-green-600 text-center sm:text-3xl mt-28 font-bold'>
				Shahid Anwar Airbnb
			</h1>
			<main className='flex flex-col md:flex-row flex-grow  mt-5 px-4 gap-6 pb-10'>
				{/* Sticky video on all devices */}
				<div className='w-full md:w-2/3 sticky top-0 z-10 h-fit bg-gray-900/80 backdrop-blur-sm p-3 rounded-md shadow-md'>
					<h3 className='text-white text-center text-lg sm:text-xl md:text-2xl font-semibold mb-3 px-4 leading-snug break-words'>
						{selectedVideo.title}
					</h3>
					<AnimatePresence mode='wait'>
						<motion.iframe
							key={selectedVideo.url}
							src={selectedVideo.url}
							title='Video Player'
							width='100%'
							height={iframeHeight}
							allow='autoplay'
							allowFullScreen
							className='rounded-lg shadow-md'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}
							transition={{ duration: 0.4 }}
						/>
					</AnimatePresence>
				</div>

				{/* Video list - below on mobile */}
				<div className='w-full md:w-1/3'>
					<h3 className='text-white mb-4 text-lg font-medium'>Video Lessons</h3>
					<ul className='space-y-2'>
						{videos.map((video, index) => (
							<li key={index}>
								<button
									className={`w-full p-2 text-left rounded border ${
										video.url === selectedVideo.url
											? 'bg-blue-100 font-semibold'
											: 'bg-white'
									}`}
									onClick={() => setSelectedVideo(video)}>
									🎬
									{video.title}
								</button>
							</li>
						))}
					</ul>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Airbnb;
