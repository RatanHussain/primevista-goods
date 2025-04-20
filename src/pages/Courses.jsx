/** @format */

import { Link } from 'react-router-dom';

const courses = [
	{
		id: 1,
		title: 'React for Beginners',
		instructor: 'Jane Doe',
		price: '$29.99',
		image: 'https://source.unsplash.com/400x200/?react',
	},
	{
		id: 2,
		title: 'Mastering Tailwind CSS',
		instructor: 'John Smith',
		price: '$19.99',
		image: 'https://source.unsplash.com/400x200/?tailwind,css',
	},
	{
		id: 3,
		title: 'Node.js Crash Course',
		instructor: 'Dev Guru',
		price: '$24.99',
		image: 'https://source.unsplash.com/400x200/?nodejs',
	},
];

function Courses() {
	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-6'>All Courses</h1>
			<div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6'>
				{courses.map((course) => (
					<div
						key={course.id}
						className='border rounded-md shadow hover:shadow-lg transition'>
						<Link to={`/course/${course.id}`}>
							<img
								src={course.image}
								alt={course.title}
								className='w-full h-40 object-cover rounded-t-md'
							/>
						</Link>
						<div className='p-4'>
							<Link to={`/course/${course.id}`}>
								<h2 className='text-xl font-semibold hover:underline'>
									{course.title}
								</h2>
							</Link>
							<p className='text-sm text-gray-600'>By {course.instructor}</p>
							<p className='mt-2 text-lg font-bold'>{course.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Courses;
