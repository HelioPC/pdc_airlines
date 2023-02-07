// React hooks
import React, { useEffect, useState } from 'react'
// Material components
import Drawer from '@mui/material/Drawer'
import Tooltip from '@mui/material/Tooltip'
// React router dom
import { NavLink, useNavigate } from 'react-router-dom'
// React Icons
import { FiMenu } from 'react-icons/fi'
import { MdKeyboardArrowLeft, MdPerson, MdLogout, MdFlight } from 'react-icons/md'
// Assets and my hooks
import logo from '../../assets/images/logo.png'
import { useUser } from '../../contexts/UserContext'
import { useWindowDimensions } from '../../hooks/dimension'

// eslint-disable-next-line react/prop-types
const SidebarHeader = ({ open, name, onClick }) => {
    return (
        <div className={'flex gap-x-4 items-center'}>
            <div
                className='cursor-pointer duration-500 w-10 h-10 rounded-lg hover:rotate-[360deg]'
                onClick={onClick}
            >
                <img src={logo} alt='logo' className='w-full h-full' />
            </div>

            <div>
                <h1
                    className={`
                            text-white text-xl font-medium origin-left
                            duration-300 ${!open && 'scale-0'}
                        `}
                >
                    {name}
                </h1>
                <p className={`text-[#AAA] text-[12px] duration-300 ${!open && 'scale-0'}`}>
                    Membro PDC
                </p>
            </div>
        </div>
    )
}

const Sidebar = () => {
    const iconSize = 20
    const { user, dispatch } = useUser()
    const [open, setOpen] = useState(true)
    const [toggleMenu, setToggleMenu] = useState(false)
    const navigate = useNavigate()
    const { width } = useWindowDimensions()
    var menu = [
        { title: `Eu ${user.nome}`, icon: <MdPerson size={iconSize - 3} />, link: `/member/${user.nome.toLowerCase().replaceAll(' ', '')}` },
        { title: 'Voos', icon: <MdFlight size={iconSize} />, link: `/member/${user.nome.toLowerCase().replaceAll(' ', '')}/flights` },
    ]

    const handleLogout = () => {
        localStorage.removeItem('userPDCAirlines2023')
        dispatch({
            type: 'clearUser',
            payload: null,
        })
        window.location.reload()
    }

    useEffect(() => {
        if(width > 666) setToggleMenu(false)
    }, [width])

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            ((event).key === 'Tab' ||
                (event).key === 'Shift')
        ) {
            return
        }
        setToggleMenu(!open)
    }

    return (
        <>
            <aside
                className={`
                    ${open ? 'w-72' : 'w-20'}
                    p-5 pt-8 bg-black h-screen relative
                    sm:block hidden duration-300
                `}
            >
                <MdKeyboardArrowLeft
                    className={`
                        absolute cursor-pointer -right-3 top-9 bg-white
                        rounded-full border-[#132742] border-2 border-solid
                        hover:rotate-180 duration-300
                        ${!open && 'rotate-180'}
                    `}
                    color='#132742'
                    size={30}
                    onClick={() => setOpen(!open)}
                />

                <SidebarHeader open={open} name={user.nome} onClick={() => navigate('/')} />

                <ul className='pt-6'>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.link}
                                className='
                                    flex items-center gap-x-4 p-2 text-sm
                                    rounded-md hover:bg-[#132742]
                                    text-white mt-2
                                '
                            >
                                <Tooltip
                                    title={item.title}
                                    placement='right'
                                >
                                    <div>{item.icon}</div>
                                </Tooltip>
                                <span className={`${!open && 'hidden'} origin-left duration-200`}>{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                    <li className='
                        flex items-center gap-x-4 p-2 text-sm cursor-pointer
                        rounded-md text-white hover:bg-[#183254] mt-2
                        hover:scale-105 duration-300
                        '
                        onClick={handleLogout}
                    >
                        <MdLogout size={iconSize} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span>
                    </li>
                </ul>
            </aside>
            <div className={'sm:hidden flex relative'}>
                <div className='p-2'>
                    <FiMenu
                        size={28}
                        className='cursor-pointer'
                        onClick={() => setToggleMenu(true)}
                    />
                </div>
            </div>
            <Drawer
                anchor='left'
                open={toggleMenu}
                onClose={toggleDrawer(true)}
            >
                <ul
                        className='
                            w-[50vw] h-screen p-5
                            shadow-2xl md:hidden list-none flex flex-col
                            justify-start items-start bg-[rgba(0,0,0,.8)]
                        '
                    >
                        <li className='my-5'>
                            <SidebarHeader open={true} name={user.nome} onClick={() => navigate('/')} />
                        </li>

                        {menu.map((item, index) => (
                            <li key={index} className='w-full'>
                                <NavLink
                                    to={item.link}
                                    className='
                                    flex items-center gap-x-4 p-2 text-sm
                                    rounded-md hover:bg-[#132742]
                                    text-white mt-2
                                '
                                >
                                    {item.icon}
                                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{item.title}</span>
                                </NavLink>
                            </li>
                        ))}
                        <li className='
                                flex items-center gap-x-4 p-2 text-sm cursor-pointer
                                rounded-md text-white hover:bg-[#183254] mt-2
                                hover:scale-105 duration-300 w-full
                            '
                            onClick={handleLogout}
                        >
                            <MdLogout size={iconSize} />
                            <span className={'origin-left duration-200'}>Logout</span>
                        </li>
                    </ul>
            </Drawer>
        </>
    )
}

export default Sidebar
