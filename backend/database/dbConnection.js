import mongoose from "mongoose";
export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {dbname:"Restaurent"})
    .then(()=>
    console.log("MongoDB Connected"))
    .catch((err)=>{
        console.log(`Some error has occured ${err}`);
    });
}