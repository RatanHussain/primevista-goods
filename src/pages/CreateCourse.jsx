/** @format */

import { useState } from 'react';

function CreateCourse() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [thumbnail, setThumbnail] = useState(null);
	const [sections, setSections] = useState([]);

	const handleAddSection = () => {
		setSections([...sections, { title: '', videos: [] }]);
	};

	const handleSectionChange = (index, value) => {
		const updated = [...sections];
		updated[index].title = value;
		setSections(updated);
	};

	const handleAddVideo = (sectionIndex) => {
		const updated = [...sections];
		updated[sectionIndex].videos.push({ name: '', file: null });
		setSections(updated);
	};

	const handleVideoChange = (sectionIndex, videoIndex, field, value) => {
		const updated = [...sections];
		updated[sectionIndex].videos[videoIndex][field] = value;
		setSections(updated);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('Course Info:', {
			title,
			description,
			price,
			thumbnail,
			sections,
		});

		alert('Course created! (Check console for full data)');
	};

	return (
		<div className='max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow'>
			<h1 className='text-2xl font-bold mb-6'>Create New Course</h1>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<input
					type='text'
					placeholder='Course Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>

				<textarea
					placeholder='Course Description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='w-full p-2 border rounded'
					rows='4'
					required></textarea>

				<input
					type='number'
					placeholder='Price (USD)'
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>

				<input
					type='file'
					onChange={(e) => setThumbnail(e.target.files[0])}
					className='w-full'
				/>

				{/* 🧩 Sections */}
				<div className='mt-6'>
					<h2 className='text-lg font-semibold mb-2'>Sections & Lectures</h2>
					{sections.map((section, index) => (
						<div key={index} className='border p-4 rounded mb-4 bg-gray-50'>
							<input
								type='text'
								placeholder={`Section ${index + 1} Title`}
								value={section.title}
								onChange={(e) => handleSectionChange(index, e.target.value)}
								className='w-full p-2 border rounded mb-2'
							/>

							{section.videos.map((video, vIndex) => (
								<div key={vIndex} className='mb-2'>
									<input
										type='text'
										placeholder='Video Title'
										value={video.name}
										onChange={(e) =>
											handleVideoChange(index, vIndex, 'name', e.target.value)
										}
										className='w-full p-2 border rounded mb-1'
									/>
									<input
										type='file'
										accept='video/*'
										onChange={(e) =>
											handleVideoChange(
												index,
												vIndex,
												'file',
												e.target.files[0]
											)
										}
										className='w-full'
									/>
								</div>
							))}

							<button
								type='button'
								onClick={() => handleAddVideo(index)}
								className='text-sm text-blue-600 mt-2 underline'>
								+ Add Lecture
							</button>
						</div>
					))}

					<button
						type='button'
						onClick={handleAddSection}
						className='bg-blue-500 text-white px-3 py-1 rounded'>
						+ Add Section
					</button>
				</div>

				<button
					type='submit'
					className='bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 mt-6'>
					Create Course
				</button>
			</form>
		</div>
	);
}

export default CreateCourse;
