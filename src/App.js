/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import PaymentPage from './pages/PaymentPage';
import Login from './components/Login';
import Contact from './pages/Contact';
import PlaylistCard from './components/PlaylistCard';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import GuestRoute from './components/GuestRoute';

function App() {
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
					path='/student-dashboard'
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
