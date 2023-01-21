import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlineLogin } from 'react-icons/ai'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import { useUser } from '../../contexts/UserContext'
import { Tooltip } from '@mui/material'

const NavbarItem = (props) => {
    const { title, url, classProp } = props
    return (
        <li className={`mx-4 ${classProp}`}>
            <NavLink
                to={url}
                className='cursor-pointer duration-500 font-bold text-white'
            >
                {title}
            </NavLink>
        </li>
    )
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classProp: PropTypes.string,
}

const Header = () => {
    const { validUser } = useUser()
    const [color, setColor] = useState(true)
    const headerElements = [
        { title: 'Descobra', url: '/' },
        { title: 'Reservar', url: '/' },
        { title: 'Destinos', url: '/' },
        { title: 'Membro PDC', url: '/' },
    ]

    useEffect(() => {
        const scrollListener = () => {
            setColor(window.scrollY < 165)
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <header className={`h-20 w-full flex items-center md:justify-start justify-between text-white py-4 sm:px-32 px-5 gap-x-5 z-10 duration-500 ${color ? 'bg-transparent' : 'bg-[rgba(0,0,0,.7)] backdrop-blur-md'}`}>
            <div className='w-full'>
                <div className='w-full flex'>
                    <div
                        className='p-3 rounded-full cursor-pointer'
                    >
                        <img src={Logo} alt='logo' className='w-20 h-full' />
                    </div>
                    <ul
                        className='
                            md:flex hidden list-none flex-row
                            justify-space-between items-center
                            flex-initial w-full
                        '
                    >
                        {
                            headerElements.map((item, index) => (
                                <NavbarItem title={item.title} url={item.url} key={index} />
                            ))
                        }
                        <li className={`
                            ml-auto rounded-full p-2 flex gap-3 items-center justify-center
                            duration-500
                        `}>
                            {validUser && (
                                <Tooltip placement='bottom' title='Tornar-se membro'>
                                    <button className='border-none bg-transparent'>
                                        <MdOutlinePersonOutline size={20} className='text-white duration-500' />
                                    </button>
                                </Tooltip>
                            )}
                            <a href='/sign'>
                                <AiOutlineLogin size={20} className='text-white duration-500' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header