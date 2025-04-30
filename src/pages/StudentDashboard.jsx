/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardList from '../components/CardList';

const StudentDashboard = () => {
	return (
		<div className='flex flex-col flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300'>
			<Navbar />
			<h1 className='text-3xl md:text-4xl font-bold pt-10 text-gray-800 mt-24 text-center'>
				All Courses
			</h1>
			<CardList/>
			<Footer />
		</div>
	);
};

export default StudentDashboard;
