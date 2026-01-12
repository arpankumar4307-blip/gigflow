import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Gigs() {
  const [gigs, setGigs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/gigs")
      .then(res => setGigs(res.data))
  }, [])

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {gigs.map(g => (
        <div key={g._id} className="border p-4 shadow bg-white">
          <h3 className="text-lg font-bold">{g.title}</h3>
          <p>{g.description}</p>
          <p className="font-semibold">₹{g.budget}</p>
          <Link className="text-blue-600" to={`/bids/${g._id}`}>
            View / Bid
          </Link>
        </div>
      ))}
    </div>
  )
}
