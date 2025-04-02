import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

const uri = "mongodb+srv://shubhamrajv16:HzyHA8xw732LjhVA@talkative.ojpqr.mongodb.net/?retryWrites=true&w=majority&appName=Talkative";
const client = new MongoClient(uri);

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: false
}));
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
    console.log('Received update request:', { code, text });
    
    await db.collection('texts').updateOne(
      { code },
      { $set: { text } },
      { upsert: true }
    );
    
    // Emit the updated text to all clients listening for this code
    io.to(code).emit('textUpdated', { code, text });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/text/:code', async (req, res) => {
  try {
    const { code } = req.params;
    console.log('Fetching text for code:', code);
    
    const document = await db.collection('texts').findOne({ code });
    console.log('Found document:', document);
    
    res.json(document || { text: '' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('joinRoom', (code) => {
    socket.join(code);
    console.log(`Client joined room: ${code}`);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});