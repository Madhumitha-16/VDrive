var express = require('express');
const { status } = require('express/lib/response');
const booking = require('../models/booking');
var router = express.Router();
const Booking = require('../models/booking');

router.post("/booking", async (req, res) => {
  try {
    let buk = new Booking(req.body);
    buk = await buk.save();
    res.status(200).json({
      status: 200,
      data: buk,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/booking", async (req, res) => {
  try {
    let buk = await Booking.find();
    res.status(200).json({
      status: 200,
      data: buk
    });

  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/pending", async (req, res) => {
  try {
    let buk = await Booking.find({
      status: "requested"
    });
    res.status(200).json({
      status: 200,
      data: buk
    });

  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/accepted", async (req, res) => {
  try {
    let buk = await Booking.find({
      status: "Accepted"
    });
    res.status(200).json({
      status: 200,
      data: buk
    });

  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.put("/booking/:rideId", async(req, res) =>{
  // console.log(req.body)
  console.log("api call")
  try {
    let updated_doc = await Booking.findByIdAndUpdate(req.params.rideId,req.body)
    console.log(updated_doc)
  } catch (error) {
    console.log(error)
  }

});



module.exports = router;


