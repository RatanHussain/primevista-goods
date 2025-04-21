/** @format */

import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
	const { id } = useParams();

	// Mock course data
	const course = {
		id,
		title: 'React for Beginners',
		description:
			'Learn how to build modern web apps using React.js from scratch.',
		instructor: 'Jane Doe',
		price: '$29.99',
		video: 'https://www.youtube.com/embed/bMknfKXIFA8', // Replace with your own later
		curriculum: [
			'Intro to React',
			'JSX & Components',
			'State & Props',
			'Hooks',
			'Project Build',
		],
	};

	const [paymentProof, setPaymentProof] = useState(null);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handlePaymentSubmit = (e) => {
		e.preventDefault();

		const user = JSON.parse(localStorage.getItem('loggedInUser'));
		if (!user) {
			alert('Please log in first.');
			return;
		}

		if (!paymentProof) {
			alert('Please upload payment screenshot or code.');
			return;
		}

		const newPayment = {
			userEmail: user.email,
			courseTitle: course.title,
			proof: URL.createObjectURL(paymentProof),
			status: 'pending',
		};

		const existing = JSON.parse(localStorage.getItem('paymentRequests')) || [];
		localStorage.setItem(
			'paymentRequests',
			JSON.stringify([...existing, newPayment])
		);
		setIsSubmitted(true);
	};

	return (
		<div className='p-8 max-w-5xl mx-auto'>


			<h1 className='text-3xl font-bold mb-4'>{course.title}</h1>

			<div className='aspect-video mb-6'>
				<iframe
					className='w-full h-full rounded'
					src={course.video}
					title={course.title}
					frameBorder='0'
					allowFullScreen></iframe>
			</div>

			<p className='text-lg text-gray-700 mb-4'>{course.description}</p>
			<div className='mb-4'>
				<p className='text-sm text-gray-500'>
					Instructor: <strong>{course.instructor}</strong>
				</p>
				<p className='text-lg font-semibold mt-1'>Price: {course.price}</p>
			</div>

			<h2 className='text-xl font-semibold mt-6 mb-2'>Curriculum</h2>
			<ul className='list-disc list-inside text-gray-700 mb-6'>
				{course.curriculum.map((lesson, index) => (
					<li key={index}>{lesson}</li>
				))}
			</ul>

			<button className='bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded transition'>
				Buy Now (Manual Payment)
			</button>
		</div>
	);
}

export default CourseDetail;
