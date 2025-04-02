import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://shubhamrajv16:HzyHA8xw732LjhVA@talkative.ojpqr.mongodb.net/?retryWrites=true&w=majority&appName=Talkative";
const client = new MongoClient(uri);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("cutpaste");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export const getCollection = async () => {
  const db = await connectDB();
  return db.collection("texts");
};