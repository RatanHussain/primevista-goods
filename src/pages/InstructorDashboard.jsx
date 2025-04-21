/** @format */

import { useEffect, useState } from 'react';

function InstructorDashboard() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('instructorCourses')) || [];
		setCourses(saved);
	}, []);

	return (
		<div className='max-w-5xl mx-auto mt-10'>
			<h1 className='text-3xl font-bold mb-6'>Instructor Dashboard</h1>

			{courses.length === 0 ? (
				<p>No courses created yet.</p>
			) : (
				<div className='space-y-6'>
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

								{/* 🖱️ Buttons */}
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
		</div>
	);
}

export default InstructorDashboard;
