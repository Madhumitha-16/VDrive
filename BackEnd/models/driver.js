const mongoose=require('mongoose');
const encrypt = require('mongoose-encryption')
const driverSchema = new mongoose.Schema({
    email: { type : String ,},
    username: { type : String ,}, 
    password: { type : String ,},
    address: { type : String ,},
    cpass: { type : String ,},
    license: { type : String ,},
    exp: { type : Number ,},
    workedAt: {type: String, possibleValues:['Organization','Schools/Colleges' ,'Home','Hospital','Other' ]}
});

// create a model with driverSchema

const secret = "Thisisdriverslittlesecret.";
driverSchema.plugin(encrypt,{secret:secret, encryptedFields:['password','cpass']});

module.exports = Driver = mongoose.model("Driver", driverSchema);