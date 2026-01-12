import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Gigs from "./pages/Gigs"
import CreateGig from "./pages/CreateGig"
import Bids from "./pages/Bids"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gigs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateGig />} />
        <Route path="/bids/:id" element={<Bids />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
