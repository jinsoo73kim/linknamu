import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

// Reuse the connection across hot reloads in development so `next dev`
// doesn't open a fresh MongoDB connection on every file save.
const clientPromise = global._mongoClientPromise ?? client.connect();
global._mongoClientPromise = clientPromise;

export const CLICKS_DB = "linknamu";
export const CLICKS_COLLECTION = "clicks";

export default clientPromise;
