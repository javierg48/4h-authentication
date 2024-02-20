// ./src/utils/mongodb.js
import { MongoClient } from 'mongodb';

const { MONGODB_URI } = process.env;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = await client.db();

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
