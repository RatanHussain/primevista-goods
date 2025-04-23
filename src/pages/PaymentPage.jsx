/** @format */

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const PaymentPage = () => {
	const [form, setForm] = useState({
		name: '',
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
			const base64Proof = reader.result.split(',')[1];

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

					emailjs
						.send(
							'service_cu7hgs7',
							'template_1qy6psa',
							{
								name: form.name,
								email: form.email,
								password: form.password,
								proof_link: imageUrl,
							},
							'qnuOCToI-TPuimNFg'
						)
						.then(() => setSubmitted(true))
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
		<div className='flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300'>
			<Navbar />
			<div className='flex-grow flex items-center mt-10 py-20 justify-center px-4 pt-24 sm:pt-12'>
				<div className='max-w-xl w-full mx-auto p-6 border rounded shadow bg-white bg-opacity-90'>
					<h2 className='text-2xl font-bold mb-4 text-center'>
						💳 Payment Instructions
					</h2>
					<p className='text-green-600 font-semibold text-center'>
						You can choose any of these payment method
					</p>

					{/* Payment Methods */}
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
						<p className='opacity-50 text-sm pb-2'>First pay one of these numbers then fill these below.</p>
					{/* Form or Success */}
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
							<p className='text-lg text-gray-700 text-center max-w-2xl mx-auto mb-3'>
								📱 WhatsApp :{' '}
								<a
									href='https://wa.me/8801766074125'
									target='_blank'
									rel='noopener noreferrer'
									className='text-pink-600 hover:underline'>
									+880 1766 074125
								</a>
							</p>
						</form>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PaymentPage;
