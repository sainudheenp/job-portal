// import React from 'react'
import Image from 'next/image'
import { BsDot } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { AiFillDelete } from 'react-icons/ai';
import { delete_posted_job } from '@/Services/job/getPostedJobs';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'





export default function JobsCard({job , posted}) {

    const [search, setSearch] = useState('');

    const [filteredData, setFilteredData] = useState([]);


    const handleDelete = async  (id) => {
        const res =  await delete_posted_job(id);
        if(res.success) {
           return setFilteredData(filteredData.filter(item => item?._id !== id))
        }
        else{
          return  toast.error(res.message);
        }
    }

    const router = useRouter();
    return (
        <div key={job._id} className='w-full cursor-pointer  transition-all duration-1000 bg-gray-100  md:w-5/12 m-4 border-black hover:shadow-xl rounded-3xl px-4 md:flex md:flex-wrap '>
            <div className='mb-4 flex  items-center justify-center py-2 '>
                <Image width={70} height={70} className="flex rounded-full " src="/avatar.jpg" alt="no image" />
                <div className='flex flex-col mx-2 px-2'>
                    <h1 className='text-xl md:text-2xl font-semibold'>{job?.user?.name}</h1>
                    <p className='text-xs sm:text-sm md:text-base text-gray-800'>{job?.job_location}</p>
                </div>
            </div>
            <div className='mb-4 flex   items-start justify-center py-2 flex-col'>
                <div className='flex  items-center justify-center '>
                    <BsDot className='text-4xl font-extrabold text-black' />
                    <h2 className='text-lg text-gray-900'>Wage :</h2>
                    <p className='text-base  font-semibold'>₹{job?.wage} / day</p>
                </div>
                <div className='flex items-center  justify-center'>
                    <BsDot className='text-4xl font-extrabold text-black' />
                    <h2 className='text-lg text-gray-900'>Date :</h2>
                    <p className='text-base  font-semibold'>{new Date(`${job?.job_date}`).toLocaleDateString('en-GB')}</p>
                </div>
                <div className='flex  items-center justify-center '>
                    <BsDot className='text-4xl font-extrabold text-black' />
                    <h2 className='text-lg text-gray-900'>Job Type :</h2>
                    <p className='text-base  font-semibold'>{job?.job_type}</p>
                </div>
            </div>
            <div className='mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between  items-center '>

                <div className='mb-4 flex  items-start justify-center py-2 flex-col'>
                    <div className='flex px-6 rounded-2xl py-1 items-center justify-center bg-gray-700 text-gray-300  '>
                        <p>{job?.title} </p>
                    </div>
                </div>
                {
                    posted ? (   
                        <Link href="/frontend/displayJobs" className="font-medium text-black hover:underline ">

                            <button onClick={() => handleDelete(job?._id)} className='md:px-2 md:py-2 px-1 py-1 text-xl text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600   rounded transition-all duration-700  '><AiFillDelete/></button>
                        </Link>                    
                    ) : (
                        <div></div>
                    )
                }
                {
                    posted ? (
                        <button onClick={() => router.push(`/frontend/detailPostedJob/${job?._id}`)} className='my-2 py-2 px-4  border border-black   rounded flex items-center justify-center transition-all duration-700 hover:bg-black hover:text-white font-semibold'>View Applications <AiOutlineArrowRight className='mx-2 text-xl' /></button>

                        // <button onClick={() => router.push(`/frontend/deleteJobPost/${job?._id}`)} className='my-2 py-2 px-4  border border-black   rounded flex items-center justify-center transition-all duration-700 hover:bg-black hover:text-white font-semibold'>Delete<AiOutlineArrowRight className='mx-2 text-xl' /></button>
                    ) : (
                            <div></div>
                        )
                    }
                    <button onClick={() => router.push(`/frontend/jobDetails/${job?._id}`)} className='my-2 py-2 px-4  border border-black   rounded flex items-center justify-center transition-all duration-700 hover:bg-black hover:text-white  font-semibold'>View Detail <AiOutlineArrowRight className='mx-2 text-xl' /></button>
            </div>
        </div>
    )
}
