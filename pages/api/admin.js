// pages/api/collection.js
import ConnectDB from '@/DB/connectDB';
import Job from '@/models/Job';
import user from '@/models/User';
// import Joi from 'joi';
// import jwt from 'jsonwebtoken';
// import mongoose from 'mongoose';

ConnectDB();

// export default async function handler(req, res) {
//     try {
//       // Replace 'YourModel' with the actual name of your Mongoose model
//       const modelName = 'users';
      
//       // Fetch the count of documents in the collection
//       const count = await mongoose.connection.db.collection(user).countDocuments();
      
//       res.status(200).json({ count });
//     } catch (error) {
//       console.error('Error fetching collection count:', error.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }

export default async function handler(req, res) {
    await ConnectDB();

    try {
        // Use countDocuments to get the total count of jobs
        const Count = await user.countDocuments({});
        const JobCount = await Job.countDocuments({});
        const Userdata = await user.find({});
        const AllTransaction = Count * 99;
        // const UserDelete = await user.deleteOne({});
        // const UserDelete = await user.findByIdAndDelete({})
        // console.log(Userdata)
        // console.log(Count);

        return res.status(200).json({ success: true, data: { Count, JobCount,Userdata, AllTransaction} });
    } catch (error) {
        console.log('Error in getting count (server) => ', error);
        return res.status(500).json({ success: false });
    }


   
}
