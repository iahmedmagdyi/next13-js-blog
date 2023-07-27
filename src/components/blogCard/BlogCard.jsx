'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './blogCard.module.css'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const BlogCard = ({ blog: { title, desc, imageUrl, likes, authorId, _id } }) => {

    const { data: session } = useSession()
    const [isLiked, setIsLiked] = useState(false)
    const [blogLikes, setBlogLikes] = useState(0)


    useEffect(() => {
        session && likes && setIsLiked(likes.includes(session?.user?._id))
        session && likes && setBlogLikes(likes.length)
    }, [likes, session])

    const handleLike = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:3000/api/blog/${_id}/like`, {
                headers: {
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: 'PUT'
            })


            if (res.ok) {
                if (isLiked) {
                    setIsLiked(prev => !prev)
                    setBlogLikes(prev => prev - 1)
                } else {
                    setIsLiked(prev => !prev)
                    setBlogLikes(prev => prev + 1)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    return (
        <div className={`md:${classes.container} flex flex-col md:flex-wrap shadow-md  w-[100%] lg:h-full  gap-5 mt-5 `}>
            <div className={classes.wrapper}>
                <Link className={classes.imgContainer} href={`/blog/${_id}`}>
                    <Image src={imageUrl} alt='' width="350" height="350" />
                </Link>
                <div className={classes.blogData}>
                    <div className={classes.left}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <span>Created At: <span>{currentDate}</span></span>
                    </div>
                    <div className={classes.right}>
                        {blogLikes} {" "} {isLiked
                            ? (<AiFillLike onClick={handleLike} size={20} />)
                            : (<AiOutlineLike onClick={handleLike} size={20} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
