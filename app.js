const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000; // Replace this with your desired port number

// MongoDB setup and connection
let notes;

(async () => {
  const client = new MongoClient("mongodb://localhost:27017");
  try {
    await client.connect();
    const db = client.db('tutor');
    notes = db.collection('notes');
    console.log("MongoDB connected successfully.");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Routes
app.get("/notes", async function(req, res) {
  try {
    let cursor = await notes.find(req.query);
    let items = await cursor.toArray();
    res.send(items);
  } catch (err) {
    console.error("Error retrieving notes:", err);
    res.status(500).send("An error occurred while retrieving notes.");
  }
});

app.post("/notes", async function(req, res) {
  try {
    await notes.insertOne(req.body);
    res.send("Note added successfully.");
  } catch (err) {
    console.error("Error adding note:", err);
    res.status(500).send("An error occurred while adding a note.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

