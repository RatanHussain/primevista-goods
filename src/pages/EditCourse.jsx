/** @format */

import React, { useEffect, useState } from 'react';

const EditCourse = () => {
	const [course, setCourse] = useState(null);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');

	useEffect(() => {
		const courseId = localStorage.getItem('editCourseId');
		const allCourses =
			JSON.parse(localStorage.getItem('instructorCourses')) || [];
		const courseToEdit = allCourses.find((c) => c.id == courseId);

		if (courseToEdit) {
			setCourse(courseToEdit);
			setTitle(courseToEdit.title);
			setDescription(courseToEdit.description);
			setPrice(courseToEdit.price);
		}
	}, []);

	const handleUpdate = (e) => {
		e.preventDefault();
		const updatedCourses = JSON.parse(
			localStorage.getItem('instructorCourses')
		).map((c) => {
			if (c.id === course.id) {
				return { ...c, title, description, price };
			}
			return c;
		});

		localStorage.setItem('instructorCourses', JSON.stringify(updatedCourses));
		alert('Course updated successfully!');
		window.location.href = '/instructor-dashboard'; // Or navigate with router
	};

	if (!course) return <div>Loading...</div>;

	return (
		<div className='max-w-xl mx-auto p-6'>
			<h2 className='text-2xl font-bold mb-4'>Edit Course</h2>
			<form onSubmit={handleUpdate} className='space-y-4'>
				<div>
					<label className='block font-semibold'>Title</label>
					<input
						type='text'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className='w-full border rounded px-3 py-2'
					/>
				</div>
				<div>
					<label className='block font-semibold'>Description</label>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className='w-full border rounded px-3 py-2'
					/>
				</div>
				<div>
					<label className='block font-semibold'>Price</label>
					<input
						type='number'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						className='w-full border rounded px-3 py-2'
					/>
				</div>
				<button
					type='submit'
					className='bg-green-500 text-white px-4 py-2 rounded'>
					Update Course
				</button>
			</form>
		</div>
	);
};

export default EditCourse;
