/** @format */

import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));


	return (
		<nav className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
			<Link to='/' className='text-xl font-bold text-primary'>
				PrimeVista Goods
			</Link>
			<div className='flex gap-4'>
				<Link to='/payment' className='text-gray-700 hover:text-primary'>
					Payment Page
				</Link>
				<Link to='/login' className='text-gray-700 hover:text-primary'>
					Login
				</Link>

			</div>
		</nav>
	);
}

export default Navbar;
