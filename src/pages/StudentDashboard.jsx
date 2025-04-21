/** @format */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
	const [courses, setCourses] = useState([]);
	const user = JSON.parse(localStorage.getItem('loggedInUser'));
	const navigate = useNavigate();

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('instructorCourses')) || [];
		setCourses(saved);
		const user = JSON.parse(localStorage.getItem('loggedInUser'));
		if (!user) {
			navigate('/login');
		}
	}, []);

	return (
		<div className='max-w-6xl mx-auto mt-10'>
			<div className='flex justify-between items-center mb-4'>
				<h2 className='text-xl font-bold'>Welcome, {user?.name}</h2>
				<button
					onClick={() => {
						localStorage.removeItem('loggedInUser');
						window.location.href = '/login';
					}}
					className='bg-red-500 text-white px-3 py-1 rounded'>
					Logout
				</button>
			</div>

			<h1 className='text-3xl font-bold mb-6'>Browse Courses</h1>

			{courses.length === 0 ? (
				<p>No courses available yet.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{courses.thumbnail ? (
						<img
							src={courses.thumbnail}
							alt='Course Thumbnail'
							className='w-full h-40 object-cover rounded mb-2'
						/>
					) : (
						<div className='w-full h-40 bg-gray-200 mb-2 flex items-center justify-center text-gray-500'>
							No Image
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default StudentDashboard;
