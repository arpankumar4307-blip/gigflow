import { useState } from "react"
import axios from "axios"

export default function CreateGig() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [budget, setBudget] = useState("")

  const createGig = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/gigs",
        { title, description, budget },
        { withCredentials: true }
      )
      alert("Gig created")
    } catch (err) {
      alert("Login required")
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="w-96 p-6 shadow bg-white">
        <h2 className="text-xl mb-4">Create Gig</h2>
        <input className="border w-full p-2 mb-3" placeholder="Title" onChange={e=>setTitle(e.target.value)} />
        <textarea className="border w-full p-2 mb-3" placeholder="Description" onChange={e=>setDescription(e.target.value)} />
        <input className="border w-full p-2 mb-3" placeholder="Budget" onChange={e=>setBudget(e.target.value)} />
        <button className="bg-black text-white w-full p-2" onClick={createGig}>
          Post Gig
        </button>
      </div>
    </div>
  )
}
