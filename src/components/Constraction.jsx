/** @format */

import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import { Construction } from 'lucide-react';

function Login() {
	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300'>
			<Construction size={64} className="text-yellow-500 mb-4" />
        <h1 className="text-3xl font-semibold mb-2">We Are Working On It</h1>
        <p className="text-gray-600 text-center mb-4">
          This feature is under construction. Please check back soon!
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
        >
          Go Back
        </button>
		</div>
	);
}

export default Login;
