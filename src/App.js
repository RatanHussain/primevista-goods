/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import PaymentPage from './pages/PaymentPage';
import Login from './components/Login';
import Register from './pages/Register';

function App() {
	return (
		<Router >
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/student-dashboard' element={<StudentDashboard />} />
				<Route path='/payment' element={<PaymentPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
