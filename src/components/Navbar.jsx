/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';

function Navbar() {
	const user = JSON.parse(localStorage.getItem('loggedInUser'));
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const navigate = useNavigate();
	const auth = getAuth(app);
	const dropdownRef = useRef(null);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			localStorage.removeItem('loggedInUser');
			navigate('/login');
		} catch (error) {
			console.error('Logout error:', error.message);
		}
	};

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav className='bg-white shadow-md px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full fixed top-0 left-0 z-50 bg-opacity-50 backdrop-blur-md'>
			<div className='flex justify-between items-center w-full sm:w-auto'>
				<Link to='/' className='text-xl font-bold text-gray-800'>
					PrimeVista Goods
				</Link>
			</div>

			<div className='flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-0 text-sm sm:text-base items-center justify-center sm:justify-end w-full sm:w-auto'>
				<Link
					to='/student-dashboard'
					className='text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500'>
					Dashboard
				</Link>

				{user &&
					(user.isPaid === false ||
						user.isPaid === 'false' ||
						!user.isPaid) && (
						<Link
							to='/payment'
							className='text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500'>
							Payment Page
						</Link>
					)}

				<Link
					to='/Contact'
					className='text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500'>
					Contact Me
				</Link>

				{user ? (
					<div className='relative' ref={dropdownRef}>
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className='w-10 h-10 bg-indigo-500 text-white font-semibold rounded-full flex items-center justify-center focus:outline-none'>
							{user.name ? user.name[0].toUpperCase() : 'U'}
						</button>

						{dropdownOpen && (
							<div className='absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50 text-left'>
								<div className='px-4 py-2 text-gray-800 border-b'>
									{user.name || user.email}
								</div>
								<button
									onClick={handleLogout}
									className='w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100'>
									Logout
								</button>
							</div>
						)}
					</div>
				) : (
					<Link
						to='/login'
						className='text-white px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500'>
						Login
					</Link>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
