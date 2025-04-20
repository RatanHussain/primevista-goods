/** @format */

import { useState } from 'react';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Placeholder logic — replace with real registration later
		alert(`Registered ${name} (${email})`);
	};

	return (
		<div className='max-w-md mx-auto mt-12 p-8 border rounded shadow'>
			<h2 className='text-2xl font-bold mb-6'>Create an Account</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<input
					type='text'
					placeholder='Full Name'
					className='w-full border px-4 py-2 rounded'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
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
					Register
				</button>
			</form>
			<p className='text-sm mt-4 text-gray-600'>
				Already have an account?{' '}
				<a href='/login' className='text-blue-600 underline'>
					Login
				</a>
			</p>
		</div>
	);
}

export default Register;
