/** @format */

/** @format */

import { Facebook, Instagram } from 'lucide-react';
import { FaPinterestP, FaTiktok } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='w-full bg-white bg-opacity-50 backdrop-blur-md text-gray-700 text-center py-6 shadow-inner transition-all duration-300 ease-in-out'>
			<div className='space-y-3'>
				<p className='text-sm font-medium'>
					&copy; {new Date().getFullYear()} PrimeVista Goods. All rights
					reserved.
				</p>

				<div className='space-x-6 text-sm'>
					<a
						href='#'
						className='hover:text-pink-600 transition-colors duration-300'>
						Privacy
					</a>
					<a
						href='#'
						className='hover:text-pink-600 transition-colors duration-300'>
						Terms
					</a>
					<a
						href='/register'
						className='hover:text-pink-600 transition-colors duration-300'>
						Support
					</a>
				</div>

				<div className='flex justify-center gap-5 pt-3'>
					<a
						href='https://www.facebook.com/primevistagoods/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-blue-600 transform hover:scale-125 transition-transform duration-300'>
						<Facebook size={24} />
					</a>
					<a
						href='https://www.instagram.com/primevistagoods/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-pink-500 transform hover:scale-125 transition-transform duration-300'>
						<Instagram size={24} />
					</a>
					<a
						href='https://www.pinterest.com/primevistagoods/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-red-600 transform hover:scale-125 transition-transform duration-300'>
						<FaPinterestP size={22} />
					</a>
					<a
						href='https://www.tiktok.com/@primevistagoods?lang=en'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-black transform hover:scale-125 transition-transform duration-300'>
						<FaTiktok size={22} />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

// function Footer() {
// 	return (
// 		<footer className='w-full bg-white bg-opacity-50 backdrop-blur-md text-gray-700 text-center py-4 shadow-inner'>
// 			<div className='space-y-2'>
// 				<p className='text-sm'>
// 					&copy; {new Date().getFullYear()} PrimeVista Goods. All rights
// 					reserved.
// 				</p>
// 				<div className='space-x-4 text-sm'>
// 					<a href='#' className='hover:text-pink-600'>
// 						Privacy
// 					</a>
// 					<a href='#' className='hover:text-pink-600'>
// 						Terms
// 					</a>
// 					<a href='/register' className='hover:text-pink-600'>
// 						Support
// 					</a>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// export default Footer;
