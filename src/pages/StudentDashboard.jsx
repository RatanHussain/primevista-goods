/** @format */

import { useEffect, useState } from 'react';

function StudentDashboard() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('instructorCourses')) || [];
		setCourses(saved);
	}, []);

	return (
		<div className='max-w-6xl mx-auto mt-10'>
			<h1 className='text-3xl font-bold mb-6'>Browse Courses</h1>

			{courses.length === 0 ? (
				<p>No courses available yet.</p>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{courses.thumbnail ? (
  <img
    src={courses.thumbnail}
    alt="Course Thumbnail"
    className="w-full h-40 object-cover rounded mb-2"
  />
) : (
  <div className="w-full h-40 bg-gray-200 mb-2 flex items-center justify-center text-gray-500">
    No Image
  </div>
)}
				</div>
			)}
		</div>
	);
}

export default StudentDashboard;
