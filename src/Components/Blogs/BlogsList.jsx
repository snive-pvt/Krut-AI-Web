import React, { useState } from 'react'
import { BlogsData } from '../../Data/BlogsData'
import BlogsCard from './BlogsCard';
import { Link } from 'react-router-dom';

function BlogsList({ isExtended }) {
    const [blogs] = useState(BlogsData.sort((a, b) => b.id - a.id));

    return (
        <>
            <div className=" xl:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-20">
                {blogs.map((blog, index) => (
                    isExtended ? <BlogsCard key={index} blog={blog} /> : (index < 3 && <BlogsCard key={index} blog={blog} />)
                ))}
            </div>

           {!isExtended && <Link to='/blogs'>
                <div className="flex items-center justify-center text-black mt-10 mb-10">
                    <div
                        className=" rounded-[2rem] w-[2/5] py-2 mx-10 text-xl font-bold flex justify-center px-10 zoomEffect"
                        style={{
                            background:
                                "linear-gradient(180deg, #FFFFFF -225.69%, #01DDE9 35.95%, #37003E 141.48%)",
                        }}>
                        Go to Blogs
                    </div>
                </div>
            </Link>}
            <br />
        </>
    )
}

export default BlogsList