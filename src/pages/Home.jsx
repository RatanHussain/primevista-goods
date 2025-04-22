/** @format */

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
		<div className='p-8'>
			<h1 className='text-2xl font-bold'>Welcome to PrimeVista Goods</h1>
			<p className='mt-2 text-gray-600'>Learn. Grow. Succeed.</p>
			<div className='max-w-md mx-auto mt-12 p-8 border rounded shadow'>
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
		</div>
	);
}
export default Home;
