const mongoose=require('mongoose');
const bookingSchema = new mongoose.Schema({
    firstName: { type : String ,},
    lastName: { type : String ,}, 
    mobileNo: { type : Number ,},
    typeOfRide: { type: String, possibleValues: ['Round-Trip','Outstation','Straight Drive','Hourly Drive']},
    days: { type : Number ,},
    date: { type : Date ,},
    time: { type: String,},
    pickUp: { type : String ,},
    destiny: { type : String ,},
    status: { type: String, default: "requested"}

});

module.exports = Booking = mongoose.model("Booking", bookingSchema);
