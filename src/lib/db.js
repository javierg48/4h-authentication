// src/lib/db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://test4H:test4H@cluster0.xlktqhe.mongodb.net/4h-authentication';
const dbName = '4h-Authentication';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return client;
}

export async function getDb() {
  const client = await connectToDatabase();
  return client.db(dbName);
}
