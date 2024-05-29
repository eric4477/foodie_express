import mongoose from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://foodie_express:foodie_express@cluster0.gevrnpe.mongodb.net/foodie_express').then(()=> console.log('Db connected'))
}
