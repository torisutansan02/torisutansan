import { MongoClient } from 'mongodb';

let options = {}

const URI = process.env.MONGODB_URI;

let client = new MongoClient(URI, options);

if (process.env.NODE_ENV !== 'production') {
  if (!global.mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}