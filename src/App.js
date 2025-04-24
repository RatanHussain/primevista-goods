/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import PaymentPage from './pages/PaymentPage';
import Login from './components/Login';
import Register from './pages/Register';
import PlaylistCard from './components/PlaylistCard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/student-dashboard' element={<StudentDashboard />} /> */}
				<Route path='/payment' element={<PaymentPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/PlaylistCard' element={<PlaylistCard />} />
				<Route
					path='/student-dashboard'
					element={
						<ProtectedRoute>
							<StudentDashboard />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
