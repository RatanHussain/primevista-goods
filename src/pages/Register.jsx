/** @format */

import React from 'react';

const ContactPage = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 px-4'>
			<div className='w-full max-w-xl bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl'>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
					Contact Me / Register Now
				</h2>

				<p className='text-center text-gray-700 mb-6'>
					Want to register for the course or have questions? Reach out directly
					on WhatsApp or email — I'm here to help!
				</p>

				<div className='space-y-4 text-center text-gray-800 text-lg font-medium'>
					<p>
						📱 WhatsApp (Saudi):{' '}
						<a
							href='https://wa.me/966547297096'
							target='_blank'
							rel='noopener noreferrer'
							className='text-pink-600 hover:underline'>
							+966 54 729 7096
						</a>
					</p>
					<p>
						📱 WhatsApp (Bangladesh):{' '}
						<a
							href='https://wa.me/8801766074125'
							target='_blank'
							rel='noopener noreferrer'
							className='text-pink-600 hover:underline'>
							+880 1766 074125
						</a>
					</p>
					<p>
						📧 Email:{' '}
						<a
							href='mailto:mdratanmia7395@gmail.com'
							className='text-pink-600 hover:underline'>
							mdratanmia7395@gmail.com
						</a>
					</p>
				</div>

				<div className='text-center mt-8 beetween flex justify-center gap-20'>
					<a
						href='https://wa.me/966547297096'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition'>
						Message Me Now
					</a>
					<a
						href='payment'
						rel='noopener noreferrer'
						className='inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition'>
						Buy Now
					</a>
				</div>
			</div>
			<footer className='fixed bottom-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-md text-gray-700 text-center py-4 shadow-inner z-50'>
				<div className='space-y-2'>
					<p className='text-sm'>
						&copy; {new Date().getFullYear()} PrimeVista Goods. All rights
						reserved.
					</p>
					<div className='space-x-4'>
						<a href='#' className='hover:text-pink-600'>
							Privacy
						</a>
						<a href='#' className='hover:text-pink-600'>
							Terms
						</a>
						<a href='register' className='hover:text-pink-600'>
							Support
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default ContactPage;
