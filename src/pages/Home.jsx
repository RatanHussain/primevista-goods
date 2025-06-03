/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import PlaylistCard from '../components/PlaylistCard';
import StudentDashboard from './StudentDashboard';
import CardList from '../components/CardList';
import PaymentCard from '../components/PaymentCard';

function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();

		if (email === 'mdratanmia7395@gmail.com' && password === 'Ratan7395') {
			const adminUser = {
				name: 'RatanLLC',
				email,
				role: 'admin',
			};
			localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
			window.location.href = '/student-dashboard';
			return;
		}
	};

	return (
		<div className='flex flex-col bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 min-h-screen pt-28 md:pt-24 '>
			<Navbar />
			<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center mt-5 px-4'>
				Start Your Amazon FBA Journey — Build a Business While You Study
			</h1>

			<p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6 px-4'>
				What if you could start earning online while still in school or college?
				Our step-by-step Amazon FBA course is built for beginners — especially
				students — who want to learn how to start a real business on Amazon and
				earn passive income.
			</p>

			<p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8 px-4'>
				🛒 Learn how to find winning products 📦 Launch your first store with
				confidence 💸 Build a business that works while you sleep
			</p>

			<div className='flex justify-center mb-8'>
				<Link
					to='/payment'
					className='text-white px-6 py-3 bg-pink-500 rounded-lg text-lg font-semibold hover:bg-pink-600 transition'>
					Buy Now
				</Link>
			</div>

			<div>
				<h1 className='text-center font-bold text-3xl md:text-4xl font-bold text-gray-800 text-center'>
					Courses
				</h1>
				<div className='flex flex-wrap justify-center flex-grow flex items-center justify-center'>
					<CardList />
				</div>
			</div>

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

			<div className='flex justify-center mb-8'>
				<Link
					to='/payment'
					className='text-white px-6 py-3 bg-pink-500 rounded-lg text-lg font-semibold hover:bg-pink-600 transition'>
					Buy Now
				</Link>
			</div>

			{/* <Form /> */}

			<Footer />
		</div>
	);
}

export default Home;
