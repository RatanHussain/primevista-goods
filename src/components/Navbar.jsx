/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const user = JSON.parse(localStorage.getItem('loggedInUser'));

	return (
		<nav className='bg-white shadow-md px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full fixed top-0 left-0 z-50 bg-opacity-50 backdrop-blur-md'>
			<div className='flex justify-between items-center w-full sm:w-auto'>
				<Link to='/' className='text-xl font-bold text-gray-800'>
					PrimeVista Goods
				</Link>
			</div>

			<div className='flex flex-row sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0 text-sm sm:text-base justify-center sm:justify-end'>
				{user && (
					<Link
						to='/student-dashboard'
						className='text-white hover:text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 sm:bg-transparent sm:text-white sm:hover:text-white sm:px-3 sm:py-1'>
						Dashboard
					</Link>
				)}
				<Link
					to='/payment'
					className='text-white hover:text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 sm:bg-transparent sm:text-white sm:hover:text-white sm:px-3 sm:py-1'>
					Payment Page
				</Link>
				<Link
					to='/login'
					className='text-white hover:text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 sm:bg-transparent sm:text-white sm:hover:text-white sm:px-3 sm:py-1'>
					Login
				</Link>
				<Link
					to='/register'
					className='text-white hover:text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 sm:bg-transparent sm:text-white sm:hover:text-white sm:px-3 sm:py-1'>
					Contact Me
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
