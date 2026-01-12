const router = require("express").Router()
const Bid = require("../models/Bid")
const Gig = require("../models/Gig")
const auth = require("../middleware/auth")
const mongoose = require("mongoose")

router.post("/", auth, async (req, res) => {
  const bid = await Bid.create({
    ...req.body,
    freelancerId: req.user.id
  })
  res.json(bid)
})

router.get("/:gigId", auth, async (req, res) => {
  const bids = await Bid.find({ gigId: req.params.gigId })
  res.json(bids)
})

router.patch("/:bidId/hire", auth, async (req, res) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    const bid = await Bid.findById(req.params.bidId).session(session)
    const gig = await Gig.findById(bid.gigId).session(session)

    if (gig.status === "assigned") {
      throw "Already assigned"
    }

    gig.status = "assigned"
    await gig.save()

    await Bid.updateMany(
      { gigId: bid.gigId },
      { $set: { status: "rejected" } },
      { session }
    )

    bid.status = "hired"
    await bid.save()

    await session.commitTransaction()
    res.json("Freelancer hired successfully")

  } catch (err) {
    await session.abortTransaction()
    res.status(400).json(err)
  }
})

module.exports = router

