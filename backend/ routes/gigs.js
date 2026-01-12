const router = require("express").Router()
const Gig = require("../models/Gig")
const auth = require("../middleware/auth")

router.get("/", async (req, res) => {
  const search = req.query.search

  const gigs = search
    ? await Gig.find({
        title: { $regex: search, $options: "i" },
        status: "open"
      })
    : await Gig.find({ status: "open" })

  res.json(gigs)
})

router.post("/", auth, async (req, res) => {
  const gig = await Gig.create({
    ...req.body,
    ownerId: req.user.id
  })

  res.json(gig)
})

module.exports = router

