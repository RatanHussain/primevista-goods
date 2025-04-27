/** @format */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from '../firebase'; // adjust the path if needed
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


	const auth = getAuth(app);
	const db = getFirestore(app);
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			await setDoc(doc(db, 'students', user.uid), {
				name,
				email,
				isPaid: false,
			});

			alert('Registration successful! Please login.');
			navigate('/login');
		} catch (err) {
			console.error(err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300'>
			<Navbar />
			<div className='flex-1 flex flex-col items-center justify-center pt-20 px-4'>
				<main className='w-full mb-10 mt-14 max-w-md bg-white bg-opacity-80 backdrop-blur p-7 rounded-lg shadow'>
				<h2 className='text-xl md:text-2xl font-bold mb-6 text-center text-gray-800'>
					Register a New Account
				</h2>
					<form onSubmit={handleRegister} className='space-y-4'>
						<input
							type='text'
							placeholder='Full Name'
							className='w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
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
							disabled={loading}
							className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition'>
							{loading ? 'Registering...' : 'Register'}
						</button>
                    </form>
                    <p className='text-sm mt-4 text-center text-gray-600'>
					Already have account?{' '}
					<Link
						to='/login'
						className='text-blue-600 underline hover:text-blue-800'>
						Login
					</Link>
				</p>
                </main>
			</div>
			<Welcome />
			<Footer />
		</div>
	);
}

export default Register;
