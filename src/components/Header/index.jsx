import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'
import { AiOutlineLogin } from 'react-icons/ai'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import Modal from '../Modal'
import Logo from '../../assets/images/logo.png'
import MemberForm from '../MemberForm'
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
    const { validUser } = useUser()
    const [showModal, setShowModal] = useState(false)
    const { user } = useUser()
    const headerElements = [
        { title: 'Meu voo', url: '/search', button: false },
        { title: 'Membro PDC', url: '/', button: true },
        { title: 'Check-in', url: '/', button: false },
    ]

    const closeModal = () => {
        setShowModal(false)
    }

    const modalSteps = [
        {
            title: 'Faça parte da família',
            width: 'lg',
            children: <MemberForm closeModal={closeModal} />,
        },
        {
            title: 'Login',
            width: 'sm',
            children: <MemberLogin closeModal={closeModal} />,
        },
    ]

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
                            {validUser && (
                                <Tooltip placement='bottom' title='Tornar-se membro'>
                                    <button className='border-none bg-transparent'
                                        onClick={() => setShowModal(true)}
                                    >
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
            <Modal
                title={modalSteps[user.state].title}
                open={showModal}
                maxWidth={modalSteps[user.state].width}
                handleClose={() => setShowModal(false)}
            >
                {modalSteps[user.state].children}
            </Modal>
        </header>
    )
}

export default Header