"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { signIn, signOut, useSession } from "next-auth/react"
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { data: session } = useSession()
    return (
        <div className=' h-12 md:h-16 border-b-2 border-blue-200 shadow-sm flex items-center justify-between px-6 md:px-16 lg:px-20px xl:px-40 '>
            <Link href="/">
                <h1 className=' font-bold uppercase cursor-pointer'>
                    Blog Platform
                </h1>
            </Link>

            <div className=' flex gap-3 items-center'>
                <Image alt="" src="/person.jpg" height={50} width={50} className=' cursor-pointer object-contain rounded-full' onClick={() => setOpen(true)} />
                <div className=' hidden md:block'>

                    {
                        session?.user ? (<h1 className='font-semibold  cursor-pointer  text-center '
                            onClick={() => signOut()}>
                            Log out
                        </h1>) : (
                            <Link href='/register' className=' cursor-pointer font-semibold '>Register</Link>
                        )
                    }

                    {
                        session?.user ? (
                            <Link href="/create-blog">
                                <h1 className='font-semibold  cursor-pointer  text-center'>
                                    Create Post
                                </h1>
                            </Link>
                        ) : (null)

                    }
                </div>
            </div>
            {
                open ? (
                    <div className='md:hidden bg-[#efefef] h-[150px] w-[210px] absolute right-6 top-12 rounded-[10px]'>
                        <div className=' flex justify-end p-2 '>
                            <RxCross1 size={15} className='cursor-pointer ' onClick={() => setOpen(false)} />
                        </div>
                        <div className='flex flex-col gap-3 px-2'>

                            {
                                session?.user ? (<button className='font-semibold bg-red-200  text-center rounded-md py-2 px-4 w-[70%]'
                                    onClick={() => signOut()}>
                                    Log out
                                </button>) : (
                                    <Link href="/register">
                                        <button className='font-semibold bg-red-200  text-center rounded-md py-2 px-4 w-[70%]'
                                        >
                                            Register
                                        </button>
                                    </Link>
                                )
                            }
                            {
                                session?.user ? (
                                    <Link href="/create-blog">
                                        <h1 className='font-semibold bg-red-200 cursor-pointer  text-center rounded-md py-2 px-4 w-[70%]'>
                                            Create Post
                                        </h1>
                                    </Link>
                                ) : (null)

                            }

                        </div>
                    </div>
                ) : (null)
            }


        </div>
    )
}

export default Navbar
