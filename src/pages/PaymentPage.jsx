/** @format */

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const PaymentPage = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		courseTitle: '',
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

		const reader = new FileReader();
		reader.onloadend = () => {
			const base64Proof = reader.result;

			emailjs
				.send(
					'YOUR_SERVICE_ID',
					'YOUR_TEMPLATE_ID',
					{
						name: form.name,
						email: form.email,
						password: form.password,
						courseTitle: form.courseTitle,
						message: 'Manual payment request',
						proof: base64Proof,
					},
					'YOUR_PUBLIC_KEY'
				)
				.then(() => {
					setSubmitted(true);
				})
				.catch((err) => {
					console.error('Error sending email:', err);
					alert('Something went wrong. Try again.');
				});
		};

		if (form.proof) {
			reader.readAsDataURL(form.proof);
		} else {
			alert('Please upload payment proof.');
		}
	};

	return (
		<div className='max-w-xl mx-auto mt-8 p-6 border rounded shadow'>
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
			<div className='my-2 bg-gray-100 p-4 rounded'>
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
			</div>

			{submitted ? (
				<p className='text-green-600 font-semibold text-center'>
					✅ Your payment proof has been submitted! We'll contact you soon.
				</p>
			) : (
				<form onSubmit={handleSubmit} className='space-y-4'>
					<p className='text-sm text-gray-600 mt-3'>
						After payment, fill out the form below and upload your payment
						proof.
					</p>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
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
						placeholder='Your Password'
						onChange={handleChange}
						required
						className='w-full border px-3 py-2 rounded'
					/>
					<input
						type='text'
						name='courseTitle'
						placeholder='Course Title'
						onChange={handleChange}
						required
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
	);
};

export default PaymentPage;
