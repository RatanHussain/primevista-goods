/** @format */

import { useState } from 'react';

function Dashboard() {
	// Change this to "student" or "instructor" to test
	const [role, setRole] = useState(() => {
		return localStorage.getItem('userRole') || 'student';
	});

	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>Dashboard</h1>

			{role === 'student' ? <StudentDashboard /> : <InstructorDashboard />}
		</div>
	);
}

function StudentDashboard() {
	const enrolledCourses = [
		{
			id: 1,
			title: 'React for Beginners',
			progress: '45%',
			image: 'https://source.unsplash.com/400x200/?react',
		},
		{
			id: 2,
			title: 'Node.js Crash Course',
			progress: '80%',
			image: 'https://source.unsplash.com/400x200/?nodejs',
		},
	];

	return (
		<>
			<h2 className='text-xl font-semibold mb-4'>My Courses</h2>
			<div className='grid md:grid-cols-2 gap-6'>
				{enrolledCourses.map((course) => (
					<div key={course.id} className='border rounded-md shadow-md p-4'>
						<img
							src={course.image}
							alt={course.title}
							className='w-full h-40 object-cover rounded mb-3'
						/>
						<h3 className='text-lg font-bold'>{course.title}</h3>
						<p className='text-sm text-gray-600 mb-2'>
							Progress: {course.progress}
						</p>
						<button className='bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded'>
							Continue Learning
						</button>
					</div>
				))}
			</div>
		</>
	);
}

function InstructorDashboard() {
	const myCourses = [
		{
			id: 101,
			title: 'Intro to Tailwind CSS',
			students: 124,
			image: 'https://source.unsplash.com/400x200/?tailwind,css',
		},
	];

	return (
		<>
			<h2 className='text-xl font-semibold mb-4'>My Created Courses</h2>
			<div className='grid md:grid-cols-2 gap-6'>
				{myCourses.map((course) => (
					<div key={course.id} className='border rounded-md shadow-md p-4'>
						<img
							src={course.image}
							alt={course.title}
							className='w-full h-40 object-cover rounded mb-3'
						/>
						<h3 className='text-lg font-bold'>{course.title}</h3>
						<p className='text-sm text-gray-600 mb-2'>
							Enrolled Students: {course.students}
						</p>
						<button className='bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded'>
							Edit Course
						</button>
					</div>
				))}
			</div>

			<button className='mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded'>
				+ Create New Course
			</button>
		</>
	);
}

export default Dashboard;
