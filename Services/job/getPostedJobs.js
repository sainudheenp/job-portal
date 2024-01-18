import Cookies from "js-cookie";

export const delete_posted_job = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/getPostedJobs`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${Cookies.get('token')}`,
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(id),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in deleting bookmark job (service) => ', error);
    }
}