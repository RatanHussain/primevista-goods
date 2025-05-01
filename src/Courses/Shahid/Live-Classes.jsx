/** @format */

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Construction from '../../components/Constraction';
import { motion, AnimatePresence } from 'framer-motion';
import videos from '../../Data/Shahid/FBA';


const LiveClasses = () => {
	return (
		<div className='min-h-screen flex flex-col bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700'>
			<Navbar />
			<Construction />
			<Footer />
		</div>
	);
};

export default LiveClasses;
