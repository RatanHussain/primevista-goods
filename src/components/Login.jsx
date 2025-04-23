/** @format */

import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

function Login() {
	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-300'>
			<Navbar />
			<main className='flex-1 flex flex-col items-center justify-center pt-20 px-4'>
				<Welcome />
				<Form />
			</main>
			<Footer />
		</div>
	);
}

export default Login;
