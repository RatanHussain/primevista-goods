/** @format */

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const PaymentPage = () => {
	const [form, setForm] = useState({
		name: '', // now means "enroll amount"
		email: '',
		password: '',
		proof: null,
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleFileChange = (e) => {
		setForm({ ...form, proof: e.target.files[0] });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.proof) {
			alert('Please upload payment proof.');
			return;
		}

		const reader = new FileReader();
		reader.onloadend = () => {
			const base64Proof = reader.result.split(',')[1]; // only Base64 part

			// Upload to ImgBB
			fetch(
				`https://api.imgbb.com/1/upload?key=93667ec36609676680800dbba97272e3`,
				{
					method: 'POST',
					body: new URLSearchParams({
						image: base64Proof,
						name: 'payment_proof',
					}),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					const imageUrl = data.data.url;

					// Now send email
					emailjs
						.send(
							'service_cu7hgs7',
							'template_1qy6psa',
							{
								name: form.name,
								email: form.email,
								password: form.password,
								proof_link: imageUrl, // this is used in the <a href="{{proof_link}}">
							},
							'qnuOCToI-TPuimNFg'
						)
						.then(() => {
							setSubmitted(true);
						})
						.catch((err) => {
							console.error('Email error:', err);
							alert('Failed to send email');
						});
				})
				.catch((err) => {
					console.error('Image upload failed:', err);
					alert('Failed to upload image');
				});
		};

		reader.readAsDataURL(form.proof);
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300 min-h-screen '>

			<div className='max-w-xl pt-10 mx-auto p-6 border rounded shadow '>
				<h2 className='text-2xl font-bold mb-4 text-center'>
					💳 Payment Instructions
				</h2>

				<p className='text-green-600 font-semibold text-center'>
					You can choose any of these payment method
				</p>
				<div className='my-2 bg-gray-100 p-4 rounded'>
					<img
						className='h-10 mx-auto'
						src='https://logos-world.net/wp-content/uploads/2024/10/Bkash-Logo-500x281.png'
						alt='Bkash'
					/>
					<p className='mb-2 text-red-500'>
						<strong className='text-black'>Account Name:</strong> bKash
					</p>
					<p className='mb-2'>
						<strong>bKash Number:</strong>{' '}
						<span className='text-blue-700'>+880 1735 853640</span>
					</p>
				</div>
				<div className='my-2 bg-gray-100 p-4 rounded'>
					<img
						className='h-10 mx-auto'
						src='https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg'
						alt='Nagad'
					/>
					<p className='mb-2 text-red-500'>
						<strong className='text-black'>Account Name:</strong> Nagad
					</p>
					<p className='mb-2'>
						<strong>Nagad Number:</strong>{' '}
						<span className='text-blue-700'>+880 1766 074125</span>
					</p>
				</div>
				{/* <div className='my-2 bg-gray-100 p-4 rounded'>
				<img
					className='h-10 mx-auto'
					src='https://images.seeklogo.com/logo-png/31/1/dutch-bangla-rocket-logo-png_seeklogo-317692.png'
					alt='Roket'
				/>
				<p className='mb-2 text-red-500'>
					<strong className='text-black'>Account Name:</strong> Roket
				</p>
				<p className='mb-2'>
					<strong>Roket Number:</strong>{' '}
					<span className='text-blue-700'>+880 1234 756789</span>
				</p>
			</div> */}

				{submitted ? (
					<p className='text-green-600 font-semibold text-center'>
						✅ Your payment proof has been submitted! We'll contact you soon.
					</p>
				) : (
					<form onSubmit={handleSubmit} className='space-y-4'>
						<input
							type='text'
							name='name'
							placeholder='Enroll Amount (e.g. 10,000 BDT)'
							onChange={handleChange}
							required
							className='w-full border px-3 py-2 rounded'
						/>
						<input
							type='email'
							name='email'
							placeholder='Your Email'
							onChange={handleChange}
							required
							className='w-full border px-3 py-2 rounded'
						/>
						<input
							type='text'
							name='password'
							placeholder='New Password'
							onChange={handleChange}
							required
							className='w-full border px-3 py-2 rounded'
						/>
						<input
							type='file'
							accept='image/*,application/pdf'
							onChange={handleFileChange}
							className='w-full border px-3 py-2 rounded'
						/>
						<button
							type='submit'
							className='w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
							Submit Payment Proof
						</button>
					</form>
				)}
			</div>
			<footer className='fixed bottom-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-md text-gray-700 text-center py-4 shadow-inner z-50'>
				<div className='space-y-2'>
					<p className='text-sm'>
						&copy; {new Date().getFullYear()} PrimeVista Goods. All rights reserved.
					</p>
					<div className='space-x-4'>
						<a href='#' className='hover:text-pink-600'>
							Privacy
						</a>
						<a href='#' className='hover:text-pink-600'>
							Terms
						</a>
						<a href='#' className='hover:text-pink-600'>
							Support
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default PaymentPage;
