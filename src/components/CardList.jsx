/** @format */

import React from 'react';
import PlaylistCard from '../components/PlaylistCard';


const CardList = () => {
	return (
		<div className='flex flex-wrap justify-center mb-10 flex-grow flex items-center mt-0 py-20 justify-center px-4 sm:pt-12'>
			<PlaylistCard
				title='Wholesale With Ebrahim LLC'
				description='Start Your Amazon FBA Million Dollar Business- Total 36 Lessons.'
				imageUrl='https://www.ebrahimllc.com/wp-content/uploads/2024/06/amazon-full-fba-course.jpg'
				landing='/Ebrahim'
			/>
			<PlaylistCard
				title='Amazon A-Z With Shahid'
				description='Shahid Anwar all courses in one place- Be Multimillionaire With Shahid Anwar.'
				imageUrl='https://scontent.fruh2-1.fna.fbcdn.net/v/t39.30808-6/275270172_118915677386649_3827471218937430434_n.png?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEOkdN6ZMo0X9ImnrhT6KXOwIpW3CDdad3AilbcIN1p3dbcXdfg6uh40Tr0zXlBbuK11tzTHGoUMZ8QQCu3XKzJ&_nc_ohc=ZkEJXgjpmC4Q7kNvwH9qzhm&_nc_oc=AdnZjjvyXIfUdZXQTbYcLx8bqv3XQ04BG7Ey2EmYWQ_K4EHAiu1xmPXGF8GMwvdh4BTYgpNSG2xFkAgel2tfQVrc&_nc_zt=23&_nc_ht=scontent.fruh2-1.fna&_nc_gid=DDoqV4GyUKnpEOsYmz4n5Q&oh=00_AfGJ2YI5NpOVQ_Bkm4JUhe9FSxWbB_pMj78ehu7rSwo2pw&oe=6817C7D2'
				landing='/ShahidDashboard'
			/>
		</div>
	);
};

export default CardList;
