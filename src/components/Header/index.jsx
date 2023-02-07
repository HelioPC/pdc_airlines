import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'
import { MdOutlinePersonOutline, MdAdminPanelSettings, MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import Modal from '../Modal'
import Logo from '../../assets/images/logo.png'
import MemberLogin from '../MemberLogin'
import { useUser } from '../../contexts/UserContext'

const NavbarItem = (props) => {
    const { title, url, classProp, button } = props
    const navigate = useNavigate()

    return (
        <li className={`lg:mx-4 mx-2 ${classProp}`}>
            {
                button ? (
                    <button
                        className='lg:text-base text-sm cursor-pointer duration-500 font-bold text-white bg-transparent border-none'
                        onClick={() => navigate(url)}
                    >
                        {title}
                    </button>
                ) : (
                    <a
                        href={url}
                        className='lg:text-base text-sm cursor-pointer duration-500 font-bold text-white'
                    >
                        {title}
                    </a>
                )
            }
        </li>
    )
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    classProp: PropTypes.string,
    button: PropTypes.bool.isRequired,
}

const Header = () => {
    const { validUser, dispatch, user } = useUser()
    const [showModal, setShowModal] = useState(false)
    var headerElements = [
        { title: 'Meu voo', url: '/search', button: false },
    ]

    if(!validUser) {
        headerElements.push({
            title: 'Membro PDC',
            url: `/member/${user.nome.toLowerCase().replaceAll(' ', '')}`,
            button: false,
        })
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <header className='h-20 w-full flex items-center md:justify-start justify-between text-white py-4 lg:px-20 px-0 z-10 duration-500'>
            <div className='w-full'>
                <div className='w-full flex'>
                    <a
                        href='/'
                        className='p-3 rounded-full cursor-pointer'
                    >
                        <img src={Logo} alt='logo' className='w-20 h-full' />
                    </a>
                    <ul
                        className='
                            sm:flex hidden list-none flex-row
                            justify-space-between items-center
                            flex-initial w-full
                        '
                    >
                        {
                            headerElements.map((item, index) => (
                                <NavbarItem title={item.title} url={item.url} key={index} button={item.button} />
                            ))
                        }
                        <li className={`
                            ml-auto rounded-full p-2 flex gap-3 items-center justify-center
                            duration-500
                        `}>
                            {validUser ?
                                (
                                    <Tooltip placement='bottom' title='Entrar como membro'>
                                        <button className='border-none bg-transparent'
                                            onClick={() => setShowModal(true)}
                                        >
                                            <MdOutlinePersonOutline size={20} className='text-white duration-500' />
                                        </button>
                                    </Tooltip>
                                ) : (
                                    <Tooltip placement='bottom' title='Terminar sessão'>
                                        <button className='border-none bg-transparent'
                                            onClick={
                                                () => {
                                                    localStorage.removeItem('userPDCAirlines2023')
                                                    dispatch({
                                                        type: 'clearUser',
                                                        payload: null,
                                                    })
                                                    window.location.reload()
                                                }
                                            }
                                        >
                                            <MdLogout size={20} className='text-white duration-500' />
                                        </button>
                                    </Tooltip>
                                )
                            }
                            <Tooltip placement='bottom' title='Administrador'>
                                <a href='/sign'>
                                    <MdAdminPanelSettings size={20} className='text-white duration-500' />
                                </a>
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal
                title='Membro PDC - Airlines'
                open={showModal}
                maxWidth='sm'
                handleClose={() => setShowModal(false)}
            >
                <MemberLogin closeModal={closeModal} />
            </Modal>
        </header>
    )
}

export default Header