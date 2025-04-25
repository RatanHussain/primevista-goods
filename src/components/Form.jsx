/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase'; // adjust path if needed

function Form() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const auth = getAuth(app);
	const db = getFirestore(app);

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			const docRef = doc(db, 'students', user.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				const userData = docSnap.data();

				localStorage.setItem(
					'loggedInUser',
					JSON.stringify({
						name: userData.name,
						email: userData.email,
						role: 'student',
					})
				);

				// Redirect based on isPaid status
				if (userData.isPaid) {
					window.location.href = '/student-dashboard';
				} else {
					window.location.href = '/contact';
				}
			} else {
				setError('User data not found in database.');
			}
		} catch (err) {
			console.error(err);
			setError('Login failed: ' + err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex justify-center'>
			<div className='w-full mb-10 max-w-md bg-white bg-opacity-80 backdrop-blur p-7 rounded-lg shadow mt-14'>
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
					{/* <input
						type='password'
						placeholder='Password'
						className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/> */}

					<div className='relative'>
						<input
							type={showPassword ? 'text' : 'password'}
							placeholder='Password'
							className='w-full border border-gray-300 px-4 py-2 pr-12 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute right-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-600'>
							{showPassword ? '🙈' : '👁️'}
						</button>
					</div>

					{error && <p className='text-red-500 text-sm'>{error}</p>}
					<button
						type='submit'
						className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition'
						disabled={loading}>
						{loading ? 'Logging in...' : 'Login'}
					</button>
				</form>
				<p className='text-sm mt-4 text-center text-gray-600'>
					Don't have an account?{' '}
					<Link
						to='/Register'
						className='text-blue-600 underline hover:text-blue-800'>
						Register
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Form;
