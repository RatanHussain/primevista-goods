/** @format */

// Import the functions you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
	apiKey: 'AIzaSyAIQKjKX_Q-_gH7EW951mE-5o6jLPQY3kk',
	authDomain: 'vista-50e93.firebaseapp.com',
	projectId: 'vista-50e93',
	storageBucket: 'vista-50e93.appspot.com',
	messagingSenderId: '719365769990',
	appId: '1:719365769990:web:e313a12b9f6f065c98ec87',
	measurementId: 'G-45WCN7DJPG',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);