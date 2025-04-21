/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import CreateCourse from './pages/CreateCourse';
import InstructorDashboard from './pages/InstructorDashboard';
import StudentDashboard from './pages/StudentDashboard';
import EditCourse from './pages/EditCourse';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/course/:id' element={<CourseDetail />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/create-course' element={<CreateCourse />} />
				<Route path='/dashboard' element={<InstructorDashboard />} />
				<Route path='/student-dashboard' element={<StudentDashboard />} />
				<Route path='/edit-course' element={<EditCourse />} />
			</Routes>
		</Router>
	);
}

export default App;
