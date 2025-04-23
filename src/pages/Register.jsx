/** @format */

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
	return (
		<div className='min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 flex flex-col'>
			<Navbar />

			<main className='flex-1 flex items-center justify-center px-4 pt-20 pb-12 sm:pt-20'>
				<div className='w-full max-w-xl bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl'>
					<h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>
						Contact Me / Register Now
					</h2>

					<p className='text-center text-gray-700 mb-6'>
						Want to register for the course or have questions? Reach out
						directly on WhatsApp or email — I'm here to help!
					</p>

					<div className='space-y-4 text-center text-gray-800 text-lg font-medium'>
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
							📧 Email:{' '}
							<a
								href='mailto:mdratanmia7395@gmail.com'
								className='text-pink-600 hover:underline'>
								mdratanmia7395@gmail.com
							</a>
						</p>
					</div>

					<div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>
						<a
							href='https://wa.me/966547297096'
							target='_blank'
							rel='noopener noreferrer'
							className='w-full sm:w-auto text-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition'>
							Message Me Now
						</a>
						<a
							href='/payment'
							className='w-full sm:w-auto text-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition'>
							Buy Now
						</a>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default ContactPage;
