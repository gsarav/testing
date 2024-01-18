// main.js

const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Assuming you have a MongoDB connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Define an async function to fetch and display data
const fetchData = async () => {
  try {
    // Connect to the database
    await client.connect();

    // Assuming you have a collection named 'exampleCollection'
    const exampleCollection = client.db(UMDConnect).collection(Businesses);

    // Example query to retrieve all documents
    const data = await exampleCollection.find({}).toArray();

    // Return the data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it outside this function
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

// Define a route to handle the request
router.get('/displayData', async (req, res) => {
  try {
    // Fetch data using the async function
    const data = await fetchData();

    // Render the view with MongoDB data
    res.render(Experimenting, { data });
  } catch (error) {
    // Handle errors here
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
