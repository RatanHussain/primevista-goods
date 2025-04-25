/** @format */

// src/components/GuestRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

const GuestRoute = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('loggedInUser'));

	if (user) {
		return <Navigate to='/student-dashboard' replace />;
	}

	return children;
};

export default GuestRoute;
