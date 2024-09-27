import mongoose from "mongoose";
import validator from "validator";

const reservationSchema =new mongoose.Schema({
    firstName:{
        type: String,
        required: true,

    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email"],

    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number must contain minimum digits"],
        
        maxLength: [10, "Phone number must contain less than 13 digits"],

    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    
});
export const Reservation = mongoose.model("Reservation", reservationSchema);