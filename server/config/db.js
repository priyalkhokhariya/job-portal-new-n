import mongoose from "mongoose";

//Function to connect mongo db data base

const connectDB = async () => {
     mongoose.connection.on('connected',() => console.log('Database connected'))

     await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB