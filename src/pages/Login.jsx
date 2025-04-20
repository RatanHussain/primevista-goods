/** @format */

import { useState } from 'react';

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

	return (
		<div className='max-w-md mx-auto mt-12 p-8 border rounded shadow'>
			<h2 className='text-2xl font-bold mb-6'>Login to Your Account</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
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
	);
}

export default Login;
