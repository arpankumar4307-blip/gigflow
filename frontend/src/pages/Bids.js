import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Bids() {
  const { id } = useParams()
  const [bids, setBids] = useState([])
  const [message, setMessage] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:5000/api/bids/${id}`, {
      withCredentials: true
    }).then(res => setBids(res.data))
  }, [id])

  const placeBid = async () => {
    await axios.post(
      "http://localhost:5000/api/bids",
      { gigId: id, message, price },
      { withCredentials: true }
    )
    alert("Bid placed")
  }

  const hire = async (bidId) => {
    await axios.patch(
      `http://localhost:5000/api/bids/${bidId}/hire`,
      {},
      { withCredentials: true }
    )
    alert("Freelancer hired")
  }

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Bids</h2>

      <div className="mb-4">
        <input className="border p-2 mr-2" placeholder="Message" onChange={e=>setMessage(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Price" onChange={e=>setPrice(e.target.value)} />
        <button className="bg-black text-white px-4 py-2" onClick={placeBid}>
          Bid
        </button>
      </div>

      {bids.map(b => (
        <div key={b._id} className="border p-3 mb-2 bg-white">
          <p>{b.message} – ₹{b.price} – {b.status}</p>
          <button className="bg-green-600 text-white px-3 py-1 mt-2" onClick={() => hire(b._id)}>
            Hire
          </button>
        </div>
      ))}
    </div>
  )
}
