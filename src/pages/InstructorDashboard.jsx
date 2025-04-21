/** @format */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InstructorDashboard() {
	const [courses, setCourses] = useState([]);
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem('loggedInUser'));

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('loggedInUser'));
		if (!user || user.role !== 'admin') {
			alert('Access denied. Admin only.');
			navigate('/login');
		}
		if (!user) {
			navigate('/login');
		}
	}, []);

	const handleDelete = (id) => {
		const confirmDelete = window.confirm(
			'Are you sure you want to delete this course?'
		);
		if (!confirmDelete) return;

		const updatedCourses = courses.filter((course) => course.id !== id);
		setCourses(updatedCourses);
		localStorage.setItem('instructorCourses', JSON.stringify(updatedCourses));
	};
	const handleEdit = (id) => {
		localStorage.setItem('editCourseId', id);
		window.location.href = '/edit-course'; // or use React Router: navigate("/edit-course")
	};

	console.log(
		'Logged in user:',
		JSON.parse(localStorage.getItem('loggedInUser'))
	);

	return (
		<div className='max-w-5xl mx-auto mt-10'>
			<h1 className='text-3xl font-bold mb-6'>Instructor Dashboard</h1>

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

			{courses.length === 0 ? (
				<p>No courses created yet.</p>
			) : (
				<div className='space-y-6 mb-5'>
					{courses.map((course) => (
						<div
							key={course.id}
							className='border p-4 rounded shadow bg-white flex gap-4'>
							{/* Thumbnail */}
							{course.thumbnail ? (
								<img
									src={URL.createObjectURL(course.thumbnail)}
									alt='Thumbnail'
									className='w-32 h-24 object-cover rounded'
								/>
							) : (
								<div className='w-32 h-24 bg-gray-200 flex items-center justify-center text-gray-500'>
									No Image
								</div>
							)}

							{/* Course Info */}
							<div className='flex-1'>
								<h2 className='text-xl font-bold'>{course.title}</h2>
								<p className='text-sm text-gray-500 mb-1'>
									{course.description}
								</p>
								<p>
									<strong>Price:</strong> ${course.price}
								</p>
								<p>
									<strong>Sections:</strong> {course.sections.length}
								</p>
								<p>
									<strong>Total Lectures:</strong>{' '}
									{course.sections.reduce((acc, s) => acc + s.videos.length, 0)}
								</p>

								{
									<div className='flex gap-2 mt-2'>
										<button
											onClick={() => handleEdit(course.id)}
											className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
											Edit
										</button>
										<button
											onClick={() => handleDelete(course.id)}
											className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
											Delete
										</button>
									</div>
								}
								<div className='mt-3 space-x-4'>
									<button
										className='text-sm text-blue-600 underline'
										onClick={() =>
											(window.location.href = `/edit-course/${course.id}`)
										}>
										Edit
									</button>

									<button
										className='text-sm text-red-600 underline'
										onClick={() => {
											const confirmDelete = window.confirm(
												'Delete this course?'
											);
											if (confirmDelete) {
												const updated = courses.filter(
													(c) => c.id !== course.id
												);
												setCourses(updated);
												localStorage.setItem(
													'instructorCourses',
													JSON.stringify(updated)
												);
											}
										}}>
										Delete
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			{user?.role === 'admin' && (
				<button
					className='s-full bg-primary hover:bg-blue-700 text-white p-2 rounded mt-5'
					onClick={() => navigate('/create-course')}>
					Create New Course
				</button>
			)}
		</div>
	);
}

export default InstructorDashboard;
