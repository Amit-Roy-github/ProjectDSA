import mongoose from "mongoose";

const url = "mongodb://localhost:27017/myDatabase";

export const connectDB = async () => {
   try {
      await mongoose.connect(url);
      console.log('Database connected successfully');
   }
   catch (error) {
      console.error('Error in connecting database : ', error);
      process.exit(1);
   }
};