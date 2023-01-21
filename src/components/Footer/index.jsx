import React from 'react'

import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className='w-full h-32 sm:px-40 md:px-20 px-10 mt-20 bg-[#2564CF]'>
            <div className='w-full h-full flex sm:flex-row flex-col sm:justify-between justify-center items-center border-t-[1px] border-[#444]'>
                <div className='flex items-center'>
                    <div
                        className='p-3 rounded-full cursor-pointer'
                    >
                        <img src={logo} alt='logo' className='h-14 w-14' />
                    </div>
                    <span className='text-white text-xs'>© 2022 Cineticket, Inc.</span>
                </div>

                <h1 className='text-white text-xl font-light'>Powered by Grupo ELLI-4</h1>
            </div>
        </footer>
    )
}

export default Footer
