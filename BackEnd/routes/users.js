var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
/*router.get('/', function(req, res, next)  {
  User.find({ },function(found,error){
    if(!error){
      res.send({
         users:found
      })

    }
    res.send(error)
  })
  
});*/

/*router.post('/', function(req, res, next) {
  const usr = new User({
    email: 'test@gmail.com',
    name: 'test',
    password: 'check',
    confirm_password: 'check',
    carType: 'audi',
});
usr.save().then(() => console.log("One entry added"));
  res.send('Entry added');
});*/


router.post("/registerUser", async (req, res) => {
  try {
    let usr = new User(req.body);
    usr = await usr.save();
    res.status(200).json({
      status: 200,
      data: usr,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/registerUser", async (req, res) => {
  try {
    let usr = await User.find();
    res.status(200).json({
      status: 200,
      data: usr,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

var session;

router.get("/getUserProfile", (req, res) => {
  try {
    console.log(req.session);
    console.log(session);
    let usr = req.session.user;
    res.status(200).json({
      status: 200,
      data: usr,
    });
  } 
  catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.post("/loginUser", async (req,res)=> {
  try {
    const email = req.body.email;
    const password = req.body.password;
    let foundUser=await User.findOne({ email:email }).exec();
    if(foundUser){
      if(foundUser.password === password){
        console.log("Valid");
        session=req.session;
        session.user = foundUser;
        console.log(req.session)

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

