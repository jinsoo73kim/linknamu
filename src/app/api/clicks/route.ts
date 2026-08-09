import getMongoClient, { CLICKS_DB, CLICKS_COLLECTION } from "@/lib/mongodb";

export async function GET() {
  const client = await getMongoClient();
  const docs = await client
    .db(CLICKS_DB)
    .collection<{ linkId: string; count: number }>(CLICKS_COLLECTION)
    .find()
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return Response.json(counts);
}
