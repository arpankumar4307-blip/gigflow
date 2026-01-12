import { useState } from "react"
import axios from "axios"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      )
      alert("Login successful")
    } catch (err) {
      alert("Login failed")
    }
  }

  return (
    <div className="flex justify-center mt-20">
      <div className="w-96 p-6 shadow bg-white">
        <h2 className="text-2xl mb-4">Login</h2>
        <input className="border w-full p-2 mb-3" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="border w-full p-2 mb-3" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button className="bg-black text-white w-full p-2" onClick={login}>
          Login
        </button>
      </div>
    </div>
  )
}
