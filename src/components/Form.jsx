/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();

		// Admin login
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
		<div className='flex justify-center'>
			<div className='w-full mb-10 max-w-md bg-white bg-opacity-80 backdrop-blur p-7 rounded-lg shadow'>
				<h2 className='text-xl md:text-2xl font-bold mb-6 text-center text-gray-800'>
					Login to Your Account
				</h2>
				<form onSubmit={handleLogin} className='space-y-4'>
					<input
						type='email'
						placeholder='Email'
						className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type='password'
						placeholder='Password'
						className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button
						type='submit'
						className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition'>
						Login
					</button>
				</form>
				<p className='text-sm mt-4 text-center text-gray-600'>
					Don't have an account?{' '}
					<Link
						to='/register'
						className='text-blue-600 underline hover:text-blue-800'>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Form;
