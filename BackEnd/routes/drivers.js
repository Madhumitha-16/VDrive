var express = require('express');
var router = express.Router();
const Driver = require('../models/driver');

router.post("/registerDriver", async (req, res) => {
  try {
    let driv = new Driver(req.body);
    driv = await driv.save();
    res.status(200).json({
      status: 200,
      data: driv,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/registerDriver", async (req, res) => {
  try {
    let driv = await Driver.find();
    res.status(200).json({
      status: 200,
      data: driv,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.post("/loginDriver", async (req,res)=> {
  try {
    const email = req.body.email;
    const password = req.body.password;
    let foundDriver=await Driver.findOne({ email:email }).exec();
    if(foundDriver){
      if(foundDriver.password === password){
        console.log("Valid");
        res.status(200).json({
          status: 200,
          success: true,
        });
      }
      else{
        res.status(200).json({
          status: 200,
          success: false,
          message:'Invalid username/password'
        });

      }
    }
    else{
      res.status(200).json({
        status: 200,
        success: false,
        message:'Invalid username/password'
      });

    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});




module.exports = router;


