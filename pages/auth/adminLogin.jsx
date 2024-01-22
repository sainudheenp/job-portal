// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '@/components/NavBar';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  // const navigate = useNavigate();;

  const handleLogin = () => {
    // Predefined credentials for demonstration purposes
    const predefinedUsername = 'admin';
    const predefinedPassword = 'password';

    // Check if entered credentials match predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
      // Redirect to the admin page on successful login
      // event.preventDefault();
      router.push('/frontend/admin');
    } else {
      // Display an error message on failed login
      alert('Invalid credentials. Please try again.');
    }
  };

  return (

    <>
    <NavBar />
    <div className='w-full h-screen bg-gray-700'>
      <div className="flex flex-col items-center  text-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white text-black rounded-3xl   shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to Admin Panel
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className='text-left'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " placeholder="username" required="" />
                
              </div>
              <div className='text-left'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" required="" />
                
              </div>
             
              <button onClick={handleLogin} className="w-full text-white hover:text-black border-4 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-white dark:focus:ring-black">Log in</button>
              
            </form>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>


    </>
    
    // <div>
    //   <h1>Login</h1>
    //   <div>
    //     <label>
    //       Username:
    //       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //     </label>
    //   </div>
    //   <div>
    //     <label>
    //       Password:
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     </label>
    //   </div>
    //   <button onClick={handleLogin}>Login</button>
    // </div>
  );
};

export default LoginPage;
