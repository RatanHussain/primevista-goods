/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaymentPage from './pages/PaymentPage';
import Login from './components/Login';
import Contact from './pages/Contact';
import PlaylistCard from './components/PlaylistCard';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import GuestRoute from './components/GuestRoute';
import Ebrahim from './Courses/Ebrahim';
import ShahidDashboard from './Courses/Shahid/ShahidDashboard';
import ShahidFBA from './Courses/Shahid/Shahid-FBA';
import StudentDashboard from './pages/StudentDashboard';
import ShahidFBM from './Courses/Shahid/Shahid-FBM';
import ShahidWholeSale from './Courses/Shahid/Shahid-WholeSale';
import LiveClasses from './Courses/Shahid/Live-Classes';
import Airbnb from './Courses/Shahid/Airbnb';
import DropShipping from './Courses/Shahid/DropShipping';
import FbMarket from './Courses/Shahid/FbMarket';
import AffiliateMarketing from './Courses/Shahid/AffiliateMarketing';
import StockCrypto from './Courses/Shahid/Stock&Crypto';
import NFTs from './Courses/Shahid/NFTs';
import FbCourse from './Courses/FacebookCourse';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		// Block right-click
		const handleContextMenu = (e) => {
			e.preventDefault();
		};

		// Block key shortcuts
		const handleKeyDown = (e) => {
			// F12
			if (e.keyCode === 123) {
				e.preventDefault();
			}
			// Ctrl+Shift+I/J/C
			if (
				e.ctrlKey &&
				e.shiftKey &&
				['I', 'J', 'C'].includes(e.key.toUpperCase())
			) {
				e.preventDefault();
			}
			// Ctrl+U
			if (e.ctrlKey && e.key.toLowerCase() === 'u') {
				e.preventDefault();
			}
		};

		document.addEventListener('contextmenu', handleContextMenu);
		document.addEventListener('keydown', handleKeyDown);

		// Cleanup
		return () => {
			document.removeEventListener('contextmenu', handleContextMenu);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/student-dashboard' element={<StudentDashboard />} /> */}
				<Route path='/payment' element={<PaymentPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/Contact' element={<Contact />} />
				<Route path='/PlaylistCard' element={<PlaylistCard />} />
				<Route path='/Register' element={<Register />} />
				<Route
					path='/Ebrahim'
					element={
						<ProtectedRoute>
							<Ebrahim />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/ShahidDashboard'
					element={
						<ProtectedRoute>
							<ShahidDashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/ShahidFBA'
					element={
						<ProtectedRoute>
							<ShahidFBA />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/ShahidFBM'
					element={
						<ProtectedRoute>
							<ShahidFBM />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/ShahidWholeSale'
					element={
						<ProtectedRoute>
							<ShahidWholeSale />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/LiveClasses'
					element={
						<ProtectedRoute>
							<LiveClasses />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/Airbnb'
					element={
						<ProtectedRoute>
							<Airbnb />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/DropShipping'
					element={
						<ProtectedRoute>
							<DropShipping />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/FbMarket'
					element={
						<ProtectedRoute>
							<FbMarket />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/AffiliateMarketing'
					element={
						<ProtectedRoute>
							<AffiliateMarketing />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/StockCrypto'
					element={
						<ProtectedRoute>
							<StockCrypto />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/NFTs'
					element={
						<ProtectedRoute>
							<NFTs />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/FbCourse'
					element={
						<ProtectedRoute>
							<FbCourse />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/StudentDashboard'
					element={
						<ProtectedRoute>
							<StudentDashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/login'
					element={
						<GuestRoute>
							<Login />
						</GuestRoute>
					}
				/>
				<Route
					path='/register'
					element={
						<GuestRoute>
							<Register />
						</GuestRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
