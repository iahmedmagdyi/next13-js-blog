"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {

    const [visible, setVisible] = useState(false)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username === '' || email === '' || password === '') {
            toast.error("Fill all fields")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters")
            return
        }

        try {
            const res = await fetch('http://127.0.0.1:3000/api/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ username, email, password })
            })

            console.log(await res.json())
            if (res.ok) {
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            } else {
                toast.error("Error occured while registering")
                return
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='h-[calc(100vh-20vh)] bd-gay-50 flex  justify-center flex-col '>
            <div className=''>
                <h1 className='text-3xl text-gray-900 font-extrabold text-center '>
                    Register as a new user
                </h1>
            </div>
            <div className=' mt-8 sm:mx-auto sm:w-full sm:max-w-md '>
                <div className='bg-white py-8 sm:px-10 sm:rounded-lg  px-4 shadow  '>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="text"
                                    autoComplete="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className=' text-sm block font-medium text-gray-700 '>
                                Email Addresss
                            </label>
                            <div className='mt-1'>
                                <input type='email'
                                    autoComplete="email"
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
                        <div>
                            <button type='submit'
                                className='w-full hover:bg-blue-700 text-sm px-4 py-2 h-[40px]  bg-blue-600 rounded-md text-white font-medium '
                            > submit</button>
                        </div>
                        <div className='flex w-full'>
                            <h4 className='font-medium text-gray-700'>Already have an account?</h4>
                            <Link href="/login" className="text-blue-600 pl-2" onClick={() => signIn()}>Register now</Link>
                        </div>
                    </form>
                </div>

            </div>
            <ToastContainer />

        </div>
    )
}

export default Signup
