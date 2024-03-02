// pages/api/addToSection1.js
import { MongoClient } from "mongodb";
import { getDb } from "@/lib/db";



export async function POST(req, res) {
  // async function handler(req, res) {
    // if (req.method === 'POST') {
    console.log("in Post")

    try {
      console.log("req.body: ", req.body)
      const data = req.body; // Assuming the data is sent in the body of the request
      
    //   const client = await MongoClient.connect("your_mongodb_connection_string");
      const db = await getDb();
    //   client.db("4h-authentication");

      const section1Collection = db.collection('section1');
      const result = await section1Collection.insertOne(data);
      
      console.log("RESULT section: ", result);
      
      // client.close();

      res.status(201).json({ message: 'Document added.' });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed.' });
    }
  // }
}

// export default handler;
