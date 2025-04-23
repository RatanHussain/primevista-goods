/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		// ✅ Store the role — "student" or "instructor"
		localStorage.setItem('userRole', 'student'); // Change to "instructor" for instructor login

		alert(`Logged in as ${email}`);
		window.location.href = '/dashboard'; // Redirect to Dashboard after login
	};
	const handleLogin = (e) => {
		e.preventDefault();

		// Hardcoded admin
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

		// Allowed student list
		const allowedStudents = [
			{
				name: 'Rashof',
				email: 'operation@rashof.com',
				password: 'Ratan@7395',
			},
			{
				name: 'Ratan Mia',
				email: 'mdratanmia7096@gmail.com',
				password: 'Ratan@7395',
			},
			{
				name: 'Vista',
				email: 'primevistagoods@gmail.com',
				password: 'Ratan@7395',
			},
			{
				name: 'Belayet',
				email: 'smbelayet99@gmail.com',
				password: 'belayet123',
			},
		];

		const student = allowedStudents.find(
			(s) => s.email === email && s.password === password
		);

		if (student) {
			const studentUser = {
				name: student.name,
				email: student.email,
				role: 'student',
			};
			localStorage.setItem('loggedInUser', JSON.stringify(studentUser));
			window.location.href = '/student-dashboard';
		} else {
			alert('Invalid credentials.');
		}
	};

	return (
		<div className='flex-1 items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 pt-20 min-h-screen'>
			<h1 className='text-4xl font-bold text-gray-800 mb-4 text-center'>
				PrimeVista Goods
			</h1>

			<p className='text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6'>
				What if you could start earning online while still in school or college?
				Our step-by-step Amazon FBA course is built for beginners — especially
				students — who want to learn how to start a real business on Amazon and
				earn passive income.
			</p>

			<p className='text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8'>
				🛒 Learn how to find winning products 📦 Launch your first store with
				confidence 💸 Build a business that works while you sleep
			</p>
			<p className='text-lg text-gray-700 text-center max-w-2xl mx-auto mb-3'>
				📱 WhatsApp (Saudi):{' '}
				<a
					href='https://wa.me/966547297096'
					target='_blank'
					rel='noopener noreferrer'
					className='text-pink-600 hover:underline'>
					+966 54 729 7096
				</a>
			</p>

			<div className='flex justify-center'>
				<Link
					to='/payment'
					className='text-gray-700 hover:text-primary px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 transition'>
					Buy Now
				</Link>
			</div>

			<div className='max-w-md mx-auto mt-5 p-8 border rounded shadow '>
				<h2 className='text-2xl font-bold mb-6'>Login to Your Account</h2>
				<form onSubmit={handleLogin} className='space-y-4'>
					<input
						type='email'
						placeholder='Email'
						className='w-full border px-4 py-2 rounded'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						placeholder='Password'
						className='w-full border px-4 py-2 rounded'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button
						type='submit'
						className='w-full bg-primary hover:bg-blue-700 text-white py-2 rounded'>
						Login
					</button>
				</form>
				<p className='text-sm mt-4 text-gray-600'>
					Don't have an account?{' '}
					<a href='/register' className='text-blue-600 underline'>
						Register
					</a>
				</p>
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
}

export default Login;
