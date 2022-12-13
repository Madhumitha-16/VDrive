const mongoose=require('mongoose');
const encrypt = require('mongoose-encryption')
const userSchema = new mongoose.Schema({
    email: { type : String ,},
    username: { type : String ,}, 
    password: { type : String ,},
    cpass: { type : String ,},
    address: { type : String ,},
    city: { type : String ,},
    cType: { type : String ,},
});

const secret = "Thisisourlittlesecret.";
userSchema.plugin(encrypt,{secret:secret, encryptedFields:['password','cpass']});
// create a model with userSchema



module.exports = User = mongoose.model("User", userSchema);