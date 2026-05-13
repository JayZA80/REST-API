import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URL;

if (!uri) {
    throw new Error("MongoDB connection URI is not defined in environment variables.");
}

const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("videos");
    const collection = database.collection("info");
    return collection;
    } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectToDatabase;
