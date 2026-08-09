import getMongoClient, { CLICKS_DB, CLICKS_COLLECTION } from "@/lib/mongodb";

export async function GET() {
  try {
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
  } catch (error) {
    // TEMPORARY: surface the real error for debugging a production 500.
    const mongoKeys = Object.keys(process.env).filter((k) => k.toUpperCase().includes("MONGO"));
    return Response.json({ debugError: String(error), mongoKeys }, { status: 500 });
  }
}
