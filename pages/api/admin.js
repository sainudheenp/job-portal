// pages/api/collection.js
import ConnectDB from '@/DB/connectDB';
import user from '@/models/User';
// import Joi from 'joi';
// import jwt from 'jsonwebtoken';

ConnectDB();

export default async function handler(req, res) {
  try {
    // Replace 'your-collection-name' with the actual name of your collection
    const collectionName = 'user';
    
    // Fetch the count of documents in the collection
    const count = await mongoose.connection.db.collection(user).countDocuments();
    console.log(count)
    
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching collection count:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
