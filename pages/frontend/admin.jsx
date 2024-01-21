// import React from 'react'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { AiFillDelete } from 'react-icons/ai';
import { delete_users } from "@/Services/job/deleteUsers";

export default function Admin({}) {
  const [Count, setUserCount] = useState(null);
  const [JobCount, setJobCount] = useState(null);
  const [Userdata, setUserData] = useState(null);
  const [AllTransaction, setAllTransaction] = useState(null);
  const [UserDelete, setUserDelete] = useState(null);
  const [error, setError] = useState(null);
//   console.log(Userdata.user.name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/admin"); // Replace with your server endpoint
        setUserCount(response.data.data.Count);
        setJobCount(response.data.data.JobCount);
        setUserData(response.data.data.Userdata);
        setUserDelete(response.data.data.UserDelete);
        setAllTransaction(response.data.data.AllTransaction);
        // console.log(response.data.data.Userdata);

      } catch (error) {
        console.error("Error fetching job count:", error);
        setError("Error fetching count. Please try again.");
      }
    };

    fetchData();
  }, []);

  const handleUsers = async  (id) => {
    const res =  await delete_users(id);
    if(res.success) {
       return setFilteredData(filteredData.filter(item => item?._id !== id))
    }
    else{
    //   return  toast.error(res.message);
    console.log(error)
    }
}



// const deleteUser = async (userId) => {
//   try {
//     const response = await axios.delete(`/api/deleteUser/${userId}`);
//     console.log('User deleted:', response.data);
//     // Handle success, update UI, etc.
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     // Handle error, display error message, etc.
//   }
// };




  return (
    <div class="flex h-screen">
      <div class="px-4 py-2 bg-black bg-black lg:w-1/4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline w-8 h-8 text-white lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div class="hidden lg:block">
          <div class="my-2 mb-6">
            <h1 class="text-2xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <ul>
            <li class="mb-6">
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" class="p-1 focus:outline-none">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-4 h-4"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="search"
                  class="w-full px-4 py-2 pl-12 rounded shadow outline-none"
                  placeholder="Search..."
                />
              </div>
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
              <a
                href="#"
                class="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </a>
            </li>
            <li class="mb-2 bg-gray-800 rounded shadow">
              <a
                href="#"
                class="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-6 h-6 mr-2 -mt-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Blogs
              </a>
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
              <a
                href="#"
                class="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Reports
              </a>
            </li>
            <li class="mb-2 rounded hover:shadow hover:bg-gray-800">
              <a
                href="#"
                class="inline-block w-full h-full px-3 py-2 font-bold text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-6 h-6 mr-2 -mt-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Inbox
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full px-4 py-2 bg-gray-200 lg:w-full text-white">
        <div class="container mx-auto mt-12">
          <div class="grid gap-4 lg:grid-cols-3">
            <div class="flex items-center px-4 py-6 bg-black rounded-md shadow-md">
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <h4 class="text-2xl font-semibold text-white">
                  {error && <p>{error}</p>}
                  {Count !== null && <p>{Count}</p>}
                </h4>
                <div class="text-white">All Users</div>
              </div>
            </div>
            <div class="flex items-center px-4 py-6 bg-black rounded-md shadow-md">
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <h4 class="text-2xl font-semibold text-white">
                  {error && <p>{error}</p>}
                  {JobCount !== null && <p>{JobCount}</p>}
                </h4>
                <div class="text-white">Job Posted</div>
              </div>
            </div>
            <div class="flex items-center px-4 py-6 bg-black rounded-md shadow-md">
              <div class="p-3 bg-indigo-600 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mx-4">
                <h4 class="text-2xl font-semibold text-white">
                {error && <p>{error}</p>}
                  {AllTransaction !== null && <p>{AllTransaction}</p>}
                </h4>
                <div class="text-white">All Transaction</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-8">
            <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              {error && <p>{error}</p>}
                                  {Array.isArray(Userdata) &&
                                  Userdata.length > 0 ? (
                <table class="min-w-full">
                  <thead>
                    <tr className="bg-black">
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 ">
                        Name
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 ">
                        Email
                      </th>
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 ">
                        Status
                      </th>
                      {/* <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 ">
                        Edit
                      </th> */}
                      <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-gray-200 ">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  <tbody class="bg-white">
                  {Userdata.map((user) => (
                                        
                    <tr key={user._id}>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <Image width={70} height={70}
                              class="w-10 h-10 rounded-full width"
                              src="/avatar.jpg"
                              alt="admin dashboard ui"
                            />
                          </div>

                          <div class="ml-4">
                            <div class="text-sm font-medium leading-5 text-gray-900">
                              <div>
                                
                                  {user.name}
                                          
                                        
                                      
                                   
                                  
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div class="text-sm leading-5 text-gray-500">
                        {user.email}
                        </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          Active
                        </span>
                      </td>

                      {/* <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </td> */}
                      <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">

                      <button onClick={() => handleUsers(user?._id)} className='md:px-2 md:py-2 px-1 py-1 text-xl text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600   rounded transition-all duration-700  '><AiFillDelete/></button>
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        //   onClick={() => handleUsers(user?._id)}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg> */}

                      </td>
                    </tr>
                    
                        ))}
                      
                  </tbody>
                </table>
                ) : (
                    <p>No job data available.</p>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
