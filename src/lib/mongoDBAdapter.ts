import { MongoClient } from 'mongodb';

export async function findUserByEmail(email: string) {
  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  const db = client.db(process.env.MONGODB_DB);
  const collection = db.collection('applicants');
  const user = await collection.findOne({srmEmail: email});
  client.close();
  return user;
}