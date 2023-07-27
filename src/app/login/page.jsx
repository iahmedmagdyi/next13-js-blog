"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' h-[calc(100vh-20vh)] bd-gay-50 flex  justify-center flex-col '>
            <div className=''>
                <h1 className='text-3xl text-gray-900 font-extrabold text-center '>
                    Login to your account
                </h1>
            </div>
            <div className=' mt-8 sm:mx-auto sm:w-full sm:max-w-md '>
                <div className='bg-white py-8 sm:px-10 sm:rounded-lg  px-4 shadow  '>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className=' text-sm block font-medium text-gray-700 '>
                                Email Addresss
                            </label>
                            <div className='mt-1'>
                                <input type='email'

                                    value={email}
                                    className=' sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 appearance-none block px-3 py-2 border border-gray-300 w-full shadow-sm rounded-md '
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className=' text-sm block font-medium text-gray-700 '>
                                Password
                            </label>
                            <div className='mt-1 relative'>
                                <input
                                    type={visible ? ("text") : ("password")}
                                    value={password}
                                    className=' sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 appearance-none block px-3 py-2 border border-gray-300 w-full shadow-sm rounded-md '
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                {visible ? (<AiOutlineEye
                                    className=' absolute right-2 top-2 '
                                    size={25}
                                    onClick={() => { setVisible(false) }}
                                />

                                ) :
                                    (<AiOutlineEyeInvisible
                                        className=' absolute  right-2 top-2 '
                                        size={25}
                                        onClick={() => { setVisible(true) }}
                                    />)
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input type='checkbox'
                                    name="remember-me"
                                    className=' rounded w-4 h-4 focus:outline-none focus:border-blue-500 focus:ring-blue-500'
                                />
                                <label
                                    htmlFor='remember-me'
                                    className=' text-sm ml-2 font-medium text-gray-700 '>
                                    Remember me
                                </label>
                            </div>
                            <div className='text-sm'>
                                <a href='.forgot-password'
                                    className='  text-blue-600 hover:text-blue-500 text-sm ml-2 font-medium'>
                                    Forget your password?</a>
                            </div>

                        </div>
                        <div>
                            <button type='submit'
                                className='w-full hover:bg-blue-700 text-sm px-4 py-2 h-[40px]  bg-blue-600 rounded-md text-white font-medium '
                            > submit</button>
                        </div>
                        <div className='flex w-full'>
                            <h4 className='font-medium text-gray-700'>Not have any account?</h4>
                            <Link href="/register" className="text-blue-600 pl-2">Sign up</Link>
                        </div>
                    </form>
                </div>

            </div>
            <ToastContainer />

        </div>
    )
}

export default Login


