import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();

const uri = "mongodb+srv://shubhamrajv16:HzyHA8xw732LjhVA@talkative.ojpqr.mongodb.net/?retryWrites=true&w=majority&appName=Talkative";
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("cutpaste");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

connectDB();

app.post('/api/text', async (req, res) => {
  try {
    const { code, text } = req.body;
    await db.collection('texts').updateOne(
      { code },
      { $set: { text } },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/text/:code', async (req, res) => {
  try {
    const { code } = req.params;
    const document = await db.collection('texts').findOne({ code });
    res.json(document || { text: '' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});