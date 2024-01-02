import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { setUserData } from '@/Utils/UserSlice';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';



export default function NavBar() {
    const dispatch = useDispatch();
    const [openJobs, setOpenJobs] = useState(false)


    useEffect(() => {
        dispatch(setUserData(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null));
    }, [dispatch])


    const Router = useRouter();
    const user = useSelector(state => state.User.userData)


    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, isScrolled] = useState(false);


    const useOutsideClick = (callback) => {
        const ref = React.useRef();

        React.useEffect(() => {
            const handleClick = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }
            };

            document.addEventListener('click', handleClick, true);

            return () => {
                document.removeEventListener('click', handleClick, true);
            };
        }, [ref]);

        return ref;
    };


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                isScrolled(true)
            } else {
                isScrolled(false)
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    isScrolled(true)
                } else {
                    isScrolled(false)
                }
            })
        }
    }, [scrolled])


    const handleLogout = async () => {
        Cookies.remove('token');
        localStorage.removeItem('user')
        Router.reload();
    }




    const handleClickOutside = () => {
        setIsOpen(false);
    };
    const ref = useOutsideClick(handleClickOutside);

    return (
        <>
            <div className={`w-full ${scrolled ? "dark:bg-gray-900" : "dark:bg-gray-900"} px-6 h-20 dark:bg-gray-900 text-black flex items-center justify-between fixed top-0 left-0 z-50 shadow-lg`}>
                <div className='px-2 h-full flex items-center justify-center'>
                    <p className='uppercase font-bold tracking-widest text-lg text-white'>Hire-All</p>
                </div>
                <div className='px-2 h-full hidden items-center justify-center lg:flex text-gray-300'>
                    <Link href={'/'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Home</Link>
                    <Link href={'/frontend/displayJobs'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >List Jobs</Link>
                    <Link href={'/frontend/postedJob'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Posted Jobs</Link>
                    <Link href={'/frontend/postAJob'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Post Jobs</Link>
                    <Link href={'/frontend/dashboard'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Dashboard</Link>
                    <Link href={'/frontend/contact'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Contact</Link>
                </div>
                <div className='px-2 h-full hidden items-center justify-center lg:flex ' >
                    {
                        user !== null ? (
                            <>

                                <BiLogOut onClick={handleLogout} className=' cursor-pointer text-3xl hover:text-red-500 transition-all duration-700 text-gray-200' />
                                <p className='text-lg px-4 font-semibold text-gray-200'>{user?.name}</p>
                            </>
                        ) : (
                            <>
                                <Link href={'/auth/login'} className='px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 text-gray-300 rounded-2xl transition-all duration-700 hover:bg-white font-semibold text-base hover:text-black'>Login</Link>
                                <Link href={'/auth/register'} className='px-4 py-2 border border-white rounded uppercase tracking-widest mx-4 rounded-2xl bg-gray-300 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-white'>REGISTER</Link>
                            </>
                        )
                    }

                </div>

                <div className='flex lg:hidden  px-2 py-2 '>
                    <GiHamburgerMenu className='text-4xl text-white' onClick={() => setIsOpen(state => !state)} />
                </div>

                {
                    isOpen && (
                        <div ref={ref} className='flex w-full py-2 animate-fade-in-down  bg-white transition-all fade duration-1000 absolute top-20 left-0  items-center justify-center flex-col '>
                            <div className='px-2 h-full flex items-center justify-center flex-col py-2 '>
                                <Link href={'/'} onClick={() => setIsOpen(false)} className="px-3  m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Home</Link>
                                <button  onClick={() => setOpenJobs(state => !state)} className="px-3  m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase flex items-center justify-center" >Jobs {openJobs ? <AiFillCaretUp/>  : <AiFillCaretDown />} </button>

                                {
                                    openJobs &&
                                    <>
                                        <Link href={'/frontend/displayJobs'} onClick={() => setIsOpen(false)} className="px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >View Jobs</Link>
                                        <Link href={'/frontend/postAJob'} onClick={() => setIsOpen(false)} className="px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Post Jobs</Link>
                                        <Link href={'/frontend/postedJob'} onClick={() => setIsOpen(false)} className="px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Posted Jobs</Link>
                                    </>
                                }
                                <Link href={'/frontend/dashboard'} onClick={() => setIsOpen(false)} className="px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Dashboard</Link>
                                <Link href={'/frontend/contact'} onClick={() => setIsOpen(false)} className="px-3 m-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Contact</Link>
                            </div>
                            <div className='px-2 h-full  items-center justify-center flex' >
                                {
                                    user !== null ? (
                                        <>

                                            <BiLogOut onClick={handleLogout} className=' cursor-pointer text-3xl hover:text-red-500 transition-all duration-700' />
                                            <p className='text-lg px-4 font-semibold'>{user?.name}</p>
                                        </>
                                    ) : (
                                        <>
                                            <Link href={'/auth/login'} className='px-4 py-2 border border-white rounded uppercase tracking-widest mx-4   transition-all duration-700 hover:bg-white font-semibold text-base hover:text-black'>Login</Link>
                                            <Link href={'/auth/register'} className='px-4 py-2 border border-white rounded uppercase tracking-widest mx-4   text-black bg-white transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-white'>REGISTER</Link>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}
