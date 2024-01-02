import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Image from 'next/image'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import JobsCard from './JobsCard';

export default function Intro() {
  const [search, setSearch] = useState('');
  const jobData = useSelector(state => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([])
  const [doneSearch , setDoneSearch] = useState(false)




  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true)
  }

  return (
    <>
      <div className='w-full  h-full flex items-center lg:justify-start py-24 justify-center flex-wrap bg-gray-50 dark:bg-gray-700 '>
        <div className='lg:w-3/6 w-full sm:p-2 h-full my-2 flex items-center justify-center px-4 md:items-start md:justify-start md:p-20 flex-col '>
          <h1 className='md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-black '>Anyone Can <span className='text-white'>Get Some Jobs.</span> </h1>
          <p className='md:text-lg sm:text-sm text-xs mb-20 text-gray-400'>There are somany jobs available for unskilled labours and semi-skilled labours,
           find your perfect job in Hire-All</p>
          <div className='bg-black flex-col mb-6 w-full md:px-4 rounded-2xl  py-4 flex sm:flex-row items-center justify-center'>
            <BiSearchAlt className='text-2xl text-white mx-2 hidden sm:flex' />
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search Jobs with Job categories like cooking ...' className='xs:w-full w-3/4  h-full px-2 bg-gray-200 text-base py-3 outline-none rounded-2xl' />
            <button onClick={handleSearch} className='px-3 py-2 my-2 sm:my-0 border border-white rounded uppercase tracking-widest mx-4 rounded-2xl  text-white bg-transparent transition-all duration-700 hover:bg-white font-semibold text-base hover:text-black'>Search</button>
          </div>
          <div className=' w-full px-2 py-2 flex items-center justify-start flex-wrap'>
            <div className='flex items-center justify-center'>
              <BsFillBookmarkFill className='text-gray-400 text-xl mx-2' />
              <h1 className='font-semibold text-lg'>Suggest Tag : </h1>
            </div>
            <div className='flex   items-center justify-center px-4 flex-wrap'>
              <p className='px-2  text-gray-400'>Gardening</p>
              <p className='px-2  text-gray-400'>Home Care</p>
              <p className='px-2  text-gray-400'>Cleaning</p>
            </div>
          </div>
        </div>
        <div className='w-3/6 my-2 h-full hidden items-center justify-center flex-col p-20 lg:flex '>
          <Image  width={500} height={700} src="/labour1.jpg" alt="no-image-found" className='rounded-full' />
        </div>
      </div>
      {
        doneSearch && (
          <div className='w-full flex flex-wrap items-center justify-center py-2 px-2'>
            {
              Array.isArray(filterJobs) && filterJobs.length > 0 ? filterJobs?.map((job) => {
                return (
                  <JobsCard job={job} key={job?._id} />
                )
              }) : <p className='text-sm text-center font-semibold  text-red-500'>Sorry No such Categories Job Available Right Now</p>
            }
          </div>
        )
      }
    </>
  )
}


