const router = require("express").Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
})

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user || user.password !== req.body.password) {
    return res.status(401).json("Invalid credentials")
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  )

  res
    .cookie("token", token, { httpOnly: true })
    .json("Login successful")
})

module.exports = router

