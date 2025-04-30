/** @format */

import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

function PlaylistCard({ title, description, imageUrl, landing }) {
	const user = JSON.parse(localStorage.getItem('loggedInUser'));
	const destination = user ? landing : '/login';

	return (
		<Link className='flex justify-center mx-2 mb-10' to={destination}>
			<div className='bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
				<div className='relative'>
					<img
						src={imageUrl}
						alt={title}
						className='w-full h-44 object-cover'
					/>
					<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300'>
						<button
							className='bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition-transform'
							onClick={(e) => e.preventDefault()}>
							<Play size={24} />
						</button>
					</div>
				</div>
				<div className='p-4'>
					<h3 className='text-lg font-semibold text-gray-900 truncate'>
						{title}
					</h3>
					<p className='text-sm text-gray-600 mt-1 line-clamp-2'>
						{description}
					</p>
				</div>
			</div>
		</Link>
	);
}

export default PlaylistCard;
