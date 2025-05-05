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
				imageUrl='https://i.ytimg.com/vi/82HYTRAdqhY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDunY24fwz7E1Fma--yZPZmFryP9A'
				landing='/ShahidDashboard'
			/>
			<PlaylistCard
				title='Facebook Ads Mastery Guide'
				description='Enroll now to transform your Facebook Ads into actionable strategies.'
				imageUrl='https://idpdefault.s3.ap-south-1.amazonaws.com/584565a61ad4ddc904920240116112740.jpg'
				landing='/FbCourse'
			/>
		</div>
	);
};

export default CardList;
