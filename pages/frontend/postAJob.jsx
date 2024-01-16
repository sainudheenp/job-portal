import NavBar from '@/components/NavBar'
import Select from 'react-select'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { post_job } from '@/Services/job';
import { useRouter } from 'next/router'


export default function PostAJob() {
    const user = useSelector(state => state.User.userData)
    const router = useRouter();

    const [formData, setFormData] = useState({ user: user?._id, title: "", wage: 0, email: "", job_location: "", description: "", job_category: "", job_type: "", job_experience: "", job_vacancy: 0, job_date: "" });
    const [error, setError] = useState({ user: "", title: "", wage: "", email: "", job_location: "", description: "", job_category: "", job_type: "", job_experience: "", job_vacancy: "", job_date: "" });

    const handleSubmit = async (e) => {

        e.preventDefault();



        if (!formData.title) {
            setError({ ...error, title: "title Field is required" })
            return;
        }

        if (!formData.wage) {
            setError({ ...error, wage: "wage Field is required" })
            return;
        }

        if (!formData.email) {
            setError({ ...error, email: "Email Field is Required" })
            return;
        }


        if (!formData.job_location) {
            setError({ ...error, job_location: "Location Field is required" })
            return;
        }
        if (!formData.description) {
            setError({ ...error, description: "description Field is required" })
            return;
        }
        if (!formData.job_category) {
            setError({ ...error, job_category: "job_category Field is required" })
            return;
        }
        if (!formData.job_type) {
            setError({ ...error, job_type: "job_type Field is required" })
            return;
        }
        if (!formData.job_experience) {
            setError({ ...error, job_experience: "job_experience Field is required" })
            return;
        }
        if (!formData.job_vacancy) {
            setError({ ...error, job_vacancy: "job_vacancy Field is required" })
            return;
        }
        if (!formData.job_date) {
            setError({ ...error, job_date: "job_date Field is required" })
            return;
        }

        if (formData.user == null) {
            return toast.error("Please Login First");
        }

        const res = await post_job(formData);
        if (res.success) {
            toast.success(res.message);
            setTimeout(() => {
                router.push('/frontend/displayJobs')
            }, 1000)
        }
        else {
            toast.error(res.message);
        }
    }



    const options = [
        { value: 'fulltime', label: 'Full Time' },
        { value: 'parttime', label: 'Part Time' },
        // { value: 'internship', label: 'Internship' },
        { value: 'contract', label: 'Contract' },
    ]

    // const location = [
    //     { value: 'bathery', label: 'Bathery' },
    //     { value: 'kalpetta', label: 'Kalpetta' },
    //     { value: 'mananthavady', label: 'Mananthavady' },
    // ]








    return (
        <>
            <NavBar />
            <div className='w-full  py-20 flex items-center  justify-center flex-col bg-gray-600 text-white'>
                <h1 className='text-xl mt-4 uppercase tracking-widest border-b-2 border-b-black py-2 font-semibold mb-8 md:text-2xl lg:text-4xl'>Enter Job Details</h1>
                <form onSubmit={handleSubmit} className="sm:w-1/2 w-full px-4 mx-4  h-full" >
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="title" className='mb-1 text-base font-semibold'>Title :</label>
                        <input onChange={(e) => setFormData({ ...formData, title: e.target.value })} type="text" id='title' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter title of job' />
                        {
                            error.title && <p className="text-sm text-red-500">{error.title}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="salary" className='mb-1 text-base font-semibold'>Wage :</label>
                        <input onChange={(e) => setFormData({ ...formData, wage: e.target.value })} type="number" id='wage' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Wage for this job' />
                        {
                            error.wage && <p className="text-sm text-red-500">{error.wage}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="email" className='mb-1 text-base font-semibold'>Email :</label>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id='email' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Email to be Contacted for this job' />
                        {
                            error.email && <p className="text-sm text-red-500">{error.email}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="company" className='mb-1 text-base font-semibold'>Job Location :</label>
                        <input onChange={(e) => setFormData({ ...formData, job_location: e.target.value })} id='job_location' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Job Location' /*options={location}*/ />
                        { 
                            error.job_location && <p className="text-sm text-red-500">{error.job_location}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="description" className='mb-1 text-base font-semibold'>Description :</label>
                        <textarea onChange={(e) => setFormData({ ...formData, description: e.target.value })} onResize={"none"} type="text" id='description' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter description of job' />
                        {
                            error.description && <p className="text-sm text-red-500">{error.description}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobCategory" className='mb-1 text-base font-semibold'>Job Category :</label>
                        <input onChange={(e) => setFormData({ ...formData, job_category: e.target.value })} type="text" id='jobCategory' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Category of job' />
                        {
                            error.job_category && <p className="text-sm text-red-500">{error.job_category}</p>
                        }
                    </div>
                    <Select onChange={(e) => setFormData({ ...formData, job_type: e.value })} placeholder="Please Select Job type" className='text-black' options={options} />
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        {
                            error.job_category && <p className="text-sm text-red-500">{error.job_category}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobExperience" className='mb-1 text-base font-semibold'>Job Experience :</label>
                        <input onChange={(e) => setFormData({ ...formData, job_experience: e.target.value })} type="text" id='jobExperience' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Experience Required for this job' />
                        {
                            error.job_experience && <p className="text-sm text-red-500">{error.job_experience}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobva" className='mb-1 text-base font-semibold'>Job Vacancy :</label>
                        <input onChange={(e) => setFormData({ ...formData, job_vacancy: e.target.value })} type="number" id='jobva' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Number  of Vacancies' />
                        {
                            error.job_vacancy && <p className="text-sm text-red-500">{error.job_vacancy}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobva" className='mb-1 text-base font-semibold'>Job Date :</label>
                        <input onChange={(e) => setFormData({ ...formData, job_date: e.target.value })} type="date" id='jobda' className='w-full py-2 px-3 mb-2 border border-black rounded text-black' placeholder='Enter Date of job' />
                        {
                            error.job_date && <p className="text-sm text-red-500">{error.job_date}</p>
                        }
                    </div>
                    <button type="submit" className='w-full py-2 rounded bg-black text-white font-semibold tracking-widest'>Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}
