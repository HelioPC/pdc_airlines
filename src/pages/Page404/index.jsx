import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center text-black'>
            <h1 className='sm:text-5xl text-3xl font-bold'>404</h1>
            <p>Page not found</p>

            <Link to='/' className='bg-[#2564CF] text-white py-1 px-6 mt-14 rounded-full cursor-pointer hover:bg-[#0544AF] hover:text-white'>
                <h1 className='sm:text-2xl text-xl text-center'>Go to home</h1>
            </Link>
        </div>
    )
}

export default Page404