import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GigFlow</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Gigs</Link>
        <Link to="/create" className="hover:text-gray-300">Post Gig</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
      </div>
    </nav>
  )
}
