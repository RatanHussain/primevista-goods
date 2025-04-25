/** @format */

// src/components/ProtectedRoute.jsx

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase';

const auth = getAuth(app);
const db = getFirestore(app);

const ProtectedRoute = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [allowed, setAllowed] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const docRef = doc(db, 'students', user.uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists() && docSnap.data().isPaid) {
					setAllowed(true);
				}
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	if (loading)
		return <div className='text-center mt-10'>Checking access...</div>;

	if (!allowed) return <Navigate to='/contact' replace />;

	return children;
};

export default ProtectedRoute;
