/** @format */

import React from 'react';
import PlaylistCard from '../../components/PlaylistCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ShahidDashboard = () => {
	return (
		<div className='flex flex-col flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300'>
            <Navbar />
            <h1 className='text-3xl md:text-4xl font-bold pt-10 text-gray-800 mt-24 text-center'>
			    Shahid Anwar All Courses
			</h1>
			<div className='flex flex-wrap justify-center mb-10 flex-grow flex items-center py-20 justify-center px-4 sm:pt-12'>
				<PlaylistCard
					title='FBA for Beginners (2025)'
					description='Start Your Amazon FBA Journey- Total 36 Lessons.'
					imageUrl='https://scontent.fruh2-1.fna.fbcdn.net/v/t39.30808-6/275270172_118915677386649_3827471218937430434_n.png?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEOkdN6ZMo0X9ImnrhT6KXOwIpW3CDdad3AilbcIN1p3dbcXdfg6uh40Tr0zXlBbuK11tzTHGoUMZ8QQCu3XKzJ&_nc_ohc=ZkEJXgjpmC4Q7kNvwH9qzhm&_nc_oc=AdnZjjvyXIfUdZXQTbYcLx8bqv3XQ04BG7Ey2EmYWQ_K4EHAiu1xmPXGF8GMwvdh4BTYgpNSG2xFkAgel2tfQVrc&_nc_zt=23&_nc_ht=scontent.fruh2-1.fna&_nc_gid=DDoqV4GyUKnpEOsYmz4n5Q&oh=00_AfGJ2YI5NpOVQ_Bkm4JUhe9FSxWbB_pMj78ehu7rSwo2pw&oe=6817C7D2'
					landing='/ShahidFBA'
				/>
			</div>
			<Footer />
		</div>
	);
};

export default ShahidDashboard;
