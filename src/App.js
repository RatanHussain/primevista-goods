/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import StudentDashboard from './pages/StudentDashboard';
import PaymentPage from './pages/PaymentPage';
import Login from './pages/Login';

function App() {
	return (
		<Router >
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/student-dashboard' element={<StudentDashboard />} />
				<Route path='/payment' element={<PaymentPage />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
