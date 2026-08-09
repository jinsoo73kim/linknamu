import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export const CLICKS_DB = "linknamu";
export const CLICKS_COLLECTION = "clicks";

// Reading `process.env.MONGODB_URI` and connecting only happens when this is
// first called at request time (not at module load time), so builds don't
// fail just because a Vercel "Sensitive" env var isn't available at build time.
export default function getMongoClient(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("Missing MONGODB_URI environment variable");
    }
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}
