import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-primary">PrimeVista Goods</Link>
      <div className="flex gap-4">
        <Link to="/courses" className="text-gray-700 hover:text-primary">Courses</Link>
        <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-primary">Register</Link>
      </div>
    </nav>
  )
}

export default Navbar
