import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from '@/components/NavBar';
import JobsCard from '@/components/JobsCard';

export default function DisplayJobs() {
  const JobData = useSelector((state) => state?.Job?.JobData) || [];
  const [searchQuery, setSearchQuery] = useState('');

  // Filter jobs based on searchQuery
  const filteredJobs = JobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className='w-full py-20 flex flex-col items-center md:px-8 px-2 bg-gray-700'>
        <h1 className='mb-4 uppercase tracking-wider border-b-2 border-b-black text-3xl font-semibold text-center'>
          Available Jobs
        </h1>

        <div className='w-full flex items-center justify-end mb-4'>
          {/* Search bar on the right */}
          <input
            type='text'
            placeholder='Search jobs...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='p-2 mx-2 my-2 rounded-md border border-gray-400'
          />
        </div>

        <div className='w-full h-full py-4 flex overflow-y-auto items-center justify-center flex-wrap'>
          {/* Display filtered jobs or "No jobs found" message */}
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobsCard job={job} key={job?._id} />)
          ) : (
            <p>No jobs found</p>
          )}
        </div>
      </div>
    </>
  );
}
