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
import { IoMdCart } from 'react-icons/io';

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
			<h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center mt-5 px-4'>
				Start Your Amazon FBA Journey
			</h1>

			{/* <p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6 px-4'>
				What if you could start earning online while still in school or college?
				Our step-by-step Amazon FBA course is built for beginners — especially
				students — who want to learn how to start a real business on Amazon and
				earn passive income.
			</p> */}
			<p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6 px-4'>
				স্কুল বা কলেজে পড়াশুনা করার সময় যদি আপনি অনলাইনে আয় শুরু করতে পারেন,
				তাহলে কেমন হবে? আমাদের ধাপে ধাপে Amazon FBA কোর্সটি নতুনদের জন্য তৈরি
				করা হয়েছে - বিশেষ করে শিক্ষার্থীদের জন্য - যারা Amazon-এ একটি বাস্তব
				ব্যবসা শুরু করতে এবং প্যাসিভ ইনকাম করতে শিখতে চান।
			</p>

			{/* <p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8 px-4'>
				🛒 Learn how to find winning products 📦 Launch your first store with
				confidence 💸 Build a business that works while you sleep
			</p> */}
			<p className='text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8 px-4'>
				🛒 বিজয়ী পণ্যগুলি কীভাবে খুঁজে পাবেন তা শিখুন 📦 আত্মবিশ্বাসের সাথে
				আপনার প্রথম দোকানটি চালু করুন 💸 এমন একটি ব্যবসা তৈরি করুন যা আপনার
				ঘুমের সময় কাজ করে
			</p>

			<h1 className='text-4xl md:text-4xl font-bold text-center'>
				Your success is our goal.
			</h1>
			<h1 className='text-2xl md:text-4xl mt-5 font-bold text-center'>
				আপনার সাফল্যই আমাদের লক্ষ্য
			</h1>
			<div className='max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center my-8'>
				<h2 className='text-2xl font-bold text-gray-800 mb-2'>Exclusive</h2>
				<h2 className='text-2xl md:text-3xl font-bold text-pink-600 mb-4'>
					Limited-Time Offer 🎉
				</h2>
				<div className=' text-red-500 line-through text-lg '>৳30,000</div>
				<div className='text-4xl font-extrabold text-green-600 mb-2'>
					৳10,000
				</div>
				<p className='text-gray-600 mb-4'>
					Lifetime access with one-time payment
				</p>
				<a
					href='/payment'
					className='inline-block bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition'>
					Pay Now
				</a>
			</div>

			<div>
				<h1 className='text-center font-bold text-3xl md:text-4xl font-bold text-gray-800 text-center'>
					Courses
				</h1>
				<div className='flex flex-wrap justify-center flex-grow flex items-center justify-center'>
					<CardList />
				</div>
			</div>
			<div className='max-w-6xl mx-auto mb-12 px-4'>
				<h2 className='text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8'>
					📸 Student Screenshot Views
				</h2>

				<p className='text-center text-gray-600 text-lg mb-6'>
					See real results from our students — earnings, seller dashboards,
					course completion, and more!
				</p>
				<p className='text-center text-gray-700 text-lg italic mb-6'>
					🌟 Hundreds of students have launched their own Amazon stores and
					started earning — your success story could be next!
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{/* Replace image URLs with actual student screenshots */}
					<img
						src='https://www.ebrahimllc.com/wp-content/uploads/2024/10/ss18.png'
						alt='Student Screenshot 1'
						className='w-full h-full object-cover rounded-xl shadow-md border'
					/>
					<img
						src='https://www.ebrahimllc.com/wp-content/uploads/2024/10/ss13.png'
						alt='Student Screenshot 2'
						className='w-full h-full object-cover rounded-xl shadow-md border'
					/>
					<img
						src='https://www.ebrahimllc.com/wp-content/uploads/2024/10/IMG_20241012_192406.png'
						alt='Student Screenshot 3'
						className='w-full h-full object-cover rounded-xl shadow-md border'
					/>
					<img
						src='https://www.ebrahimllc.com/wp-content/uploads/2024/10/ss12.png'
						alt='Student Screenshot 3'
						className='w-full h-full object-cover rounded-xl shadow-md border'
					/>
					<img
						src='https://www.ebrahimllc.com/wp-content/uploads/2024/02/IMG_20240226_004838.png'
						alt='Student Screenshot 3'
						className='w-full h-full object-cover rounded-xl shadow-md border'
					/>
					<img
						src='https://www.ebrahimllc.com/wp-content/uploads/2024/10/IMG_20241012_192406.png'
						alt='Student Screenshot 3'
						className='w-full h-full object-cover rounded-xl shadow-md border'
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Home;
