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
