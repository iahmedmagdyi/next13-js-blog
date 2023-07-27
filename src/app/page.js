import BlogCard from '@/components/blogCard/BlogCard'
import { blogs } from '@/lib/data'

import classes from './page.module.css'

export async function fetchBlogs(){
  const res = await fetch('http://localhost:3000/api/blog', {cache: 'no-store'})

  return res.json()
}

export default async function Home() {
  
  const blogs = await fetchBlogs()

  return (
   <div className={classes.container}>
    {blogs?.length > 0 && <h2 className=' uppercase mt-4'>Blog wibsite</h2>}
     <div className=" mt-4 gap-4 p-4 grid md:grid-cols-2 md:px-[15px] w-full lg:grid-cols-3 px-8 grid-cols-1 lg:px-[20px] xl:px-[40px] h-full">
      {blogs?.length > 0 
       ? blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}/>
      )) : <h3 className={classes.noBlogs}>No blogs are currently in the</h3>}
     </div>
   </div>
  )
}