/** @format */

import { Link } from 'react-router-dom';

function Welcome() {
	return (
		<div className='w-full px-4 py-10'>
			<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center'>
				PrimeVista Goods
			</h1>

			<p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6'>
				What if you could start earning online while still in school or college?
				Our step-by-step Amazon FBA course is built for beginners — especially
				students — who want to learn how to start a real business on Amazon and
				earn passive income.
			</p>

			<p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8'>
				🛒 Learn how to find winning products 📦 Launch your first store with
				confidence 💸 Build a business that works while you sleep
			</p>

			<p className='text-lg text-gray-700 text-center max-w-2xl mx-auto mb-3'>
				📱 WhatsApp (Bangladesh):{' '}
				<a
					href='https://wa.me/8801766074125'
					target='_blank'
					rel='noopener noreferrer'
					className='text-pink-600 hover:underline'>
					+880 1766 074125
				</a>
			</p>

			<div className='flex justify-center'>
				<Link
					to='/payment'
					className='px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition'>
					Buy Now
				</Link>
			</div>
		</div>
	);
}

export default Welcome;
