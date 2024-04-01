import mongoose from "mongoose";
import { DBNAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`);
    console.log(`\n MongoDb Connected !! DB HOST : ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("MONGODB connection error => ", err);
    process.exit(1);
  }
};

export default connectDB;
