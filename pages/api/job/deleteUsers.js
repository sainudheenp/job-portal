import ConnectDB from '@/DB/connectDB';
import User from '@/models/User';

export default async (req, res) => {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        
            case "DELETE":
            await validateToken(req, res, async () => {
                await delete_users(req, res);
            });
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}

export const delete_users = async (req, res) => {
    const id = req.body;
    if (!id) return res.status(400).json({ success: false, message: "Please Login" })
    try {

        const deleteusers = await User.findByIdAndDelete(id)
        return res.status(200).json({ success: true, message: "Job removed successfully !" })
    } catch (error) {
        console.log('Error in deleting book mark Job (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}