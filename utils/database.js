import mongoose from "mongoose";
let isConnected = false; //track the connecton

export const connectToDB = async () => {
  mongoose.set("strictQuery");
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    console.log("MongoDB initiated");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    isConnected = true;

  } catch (error) {
    console.log(error);
  }
};
