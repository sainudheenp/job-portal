import React from 'react'
import NavBar from '@/components/NavBar'

export default function Contact() {
    // const JobData = useSelector(state => state?.Job?.JobData) || [];
    return (

        <>
         <div>
         <NavBar/>

        
<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap bg-gray-500">
        <div
            class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
                marginwidth="0" scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31254.688732964765!2d76.06670705290269!3d11.706019064301255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60aca72a6f31d%3A0x80f9947968021a09!2sWayanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704116758344!5m2!1sen!2sin"
                ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                    <p class="mt-1">WMO Arts and Science College, Muttil, Kalpetta, Wayanad, Kerala</p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                    <a class="text-red-500 leading-relaxed">hireall@gmail.com</a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                    <p class="leading-relaxed">123-456-7890</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-gray-500 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p class="leading-relaxed mb-5 text-gray-300">Feel free to give your suggetions and feedback
            </p>
            <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-300">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-300">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-300">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
            {/* <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.</p> */}
        </div>
    </div>
</section>
    </div>

    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in touch</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">hireall@gmail.com</p>
            </div>

            <div>
                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Office</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">WMOC Muttil, Kalpetta</p>
            </div>

            <div>
                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
                <p class="mt-2 text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                <p class="mt-2 text-blue-500 dark:text-blue-400">123-456-7890</p>
            </div>
        </div>
    </div>
</section>
        </>
    )
}


// export default contact;