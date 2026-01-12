const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const authRoutes = require("./routes/auth")
const gigRoutes = require("./routes/gigs")
const bidRoutes = require("./routes/bids")

const app = express()

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/api/auth", authRoutes)
app.use("/api/gigs", gigRoutes)
app.use("/api/bids", bidRoutes)

app.listen(5000, ()=>console.log("Server running on port 5000"))

