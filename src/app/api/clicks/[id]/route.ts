import getMongoClient, { CLICKS_DB, CLICKS_COLLECTION } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const client = await getMongoClient();
    const result = await client
      .db(CLICKS_DB)
      .collection<{ linkId: string; count: number }>(CLICKS_COLLECTION)
      .findOneAndUpdate(
        { linkId: id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" }
      );

    return Response.json({ count: result?.count ?? 1 });
  } catch (error) {
    // TEMPORARY: surface the real error for debugging a production 500.
    return Response.json({ debugError: String(error) }, { status: 500 });
  }
}
