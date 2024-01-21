import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';
import validateToken from '@/middleware/tokenValidation';





ConnectDB(); // Connect to the database

// export default async function handler(req, res) {
//   const {
//     query: { userId },
//     method,
//   } = req;

//   switch (method) {
//     case 'DELETE':
//       try {
//         const deletedUser = await User.findByIdAndDelete(_id);

//         if (!deletedUser) {
//           return res.status(404).json({ success: false, message: 'User not found' });
//         }

//         return res.status(200).json({ success: true, data: deletedUser, message: 'User deleted successfully' });
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         return res.status(500).json({ success: false, message: 'Server error' });
//       }

//     default:
//       res.setHeader('Allow', ['DELETE']);
//       return res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

export default async (req, res) => {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            await validateToken(req, res, async () => {
                await getUsernames(req, res);
            });
            break;
            case "DELETE":
            await validateToken(req, res, async () => {
                await delete_users(req, res);
            });
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}

// const getUsernames =  async (req, res) => {
//     await ConnectDB();
//     const data = req.query;
//     const id = data?.id


//     try {
//         const gettingusers = await Job.find({User : id}).populate('user', 'name email');
//         return res.status(200).json({ success: true, data: gettingjobs })
//     } catch (error) {
//         console.log('Error in getting a specifed Job job (server) => ', error);
//         return res.status(403).json({ success: false, message: "Something Went Wrong Please Retry login !" })
//     }
// }

export const delete_users = async (req, res) => {
    const id = req.body;

    try {

        const deleteUsers = await User.findByIdAndDelete(id)
        return res.status(200).json({ success: true, message: "User removed successfully !" })
    } catch (error) {
        console.log('Error in deleting user (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}