/** @format */

import React from 'react';

const PaymentCard = () => {
	return (
		<div className='max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center my-8'>
			<h2 className='text-2xl font-bold text-gray-800 mb-2'>Exclusive Offer</h2>
			<div className='text-gray-500 line-through text-lg'>৳30,000</div>
			<div className='text-4xl font-extrabold text-green-600 mb-2'>৳10,000</div>
			<p className='text-gray-600 mb-4'>
				Lifetime access with one-time payment
			</p>
			<a
				href='/payment'
				className='inline-block bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 transition'>
				Pay Now
			</a>
		</div>
	);
};

export default PaymentCard;
