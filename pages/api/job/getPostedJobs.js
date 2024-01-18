import ConnectDB from '@/DB/connectDB';
import validateToken from '@/middleware/tokenValidation';
import Job from '@/models/Job';


export default async (req, res) => {
    await ConnectDB();
    const { method } = req;
    switch (method) {
        case 'GET':
            await validateToken(req, res, async () => {
                await getPostedJobs(req, res);
            });
            break;
            case "DELETE":
            await validateToken(req, res, async () => {
                await delete_posted_job(req, res);
            });
            break;
        default:
            res.status(400).json({ success: false, message: 'Invalid Request' });
    }
}


const getPostedJobs =  async (req, res) => {
    await ConnectDB();
    const data = req.query;
    const id = data?.id

    if(!id) return res.status(400).json({ success: false, message: "Please Login" })

    try {
        const gettingjobs = await Job.find({user : id}).populate('user', 'name email');
        return res.status(200).json({ success: true, data: gettingjobs })
    } catch (error) {
        console.log('Error in getting a specifed Job job (server) => ', error);
        return res.status(403).json({ success: false, message: "Something Went Wrong Please Retry login !" })
    }
}

export const delete_posted_job = async (req, res) => {
    const id = req.body;
    if (!id) return res.status(400).json({ success: false, message: "Please Login" })
    try {

        const deletejobs = await Job.findByIdAndDelete(id)
        return res.status(200).json({ success: true, message: "Job removed successfully !" })
    } catch (error) {
        console.log('Error in deleting book mark Job (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}