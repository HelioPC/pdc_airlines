import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { GiAirplaneDeparture } from 'react-icons/gi'
//import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
//import { ThreeDots } from 'react-loader-spinner'

import * as F from './style'
import logo from '../../assets/images/logo.png'
import FlightDetails from './FlightDetails'
import Modal from '../../components/Modal'
import BookingForm from '../../components/BookingForm'
import { useBooking } from '../../contexts/BookingContext'

/*const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker()

    return (
        promiseInProgress &&
        <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='#282936'
            ariaLabel='three-dots-loading'
            wrapperStyle={{}}
            wrapperClassName=''
            visible={true}
        />
    )
}*/

const FlySearchResult = () => {
    //const storage = localStorage.getItem('pdcAirlineUAN2022')
    //const flySearchResults = JSON.parse(storage)
    //const [load, setLoad] = useState(true)
    const [showDrawer, setShowDrawer] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { state } = useBooking()
    const modalSteps = [
        {
            title: 'Dados pessoais',
            children: <BookingForm />,
        },
        {
            title: 'Selecione o seu lugar',
            children: <div>Olá</div>,
        },
    ]
    const flightInfo = [
        {
            origin: {
                name: 'Luanda',
                shortName: 'LAD',
                time: '09:35',
            },
            destiny: {
                name: 'Lisboa',
                shortName: 'LIS',
                time: '16:50',
            },
            duration: '7h 15min',
            scale: false,
            hasEconomic: true,
            economic: {
                price: '390.000 kz',
            },
            hasExecutive: true,
            executive: {
                price: '990.000 kz',
            },
        },
        {
            origin: {
                name: 'Luanda',
                shortName: 'LAD',
                time: '09:35',
            },
            destiny: {
                name: 'Lisboa',
                shortName: 'LIS',
                time: '16:50',
            },
            duration: '7h 15min',
            scale: false,
            hasEconomic: true,
            economic: {
                price: '390.000 kz',
            },
            hasExecutive: true,
            executive: {
                price: '990.000 kz',
            },
        },
        {
            origin: {
                name: 'Luanda',
                shortName: 'LAD',
                time: '09:35',
            },
            destiny: {
                name: 'Lisboa',
                shortName: 'LIS',
                time: '16:50',
            },
            duration: '7h 15min',
            scale: false,
            hasEconomic: true,
            economic: {
                price: '390.000 kz',
            },
            hasExecutive: true,
            executive: {
                price: '990.000 kz',
            },
        },
    ]

    /*const FetchTest = async () => {
        await new Promise(res => setTimeout(res, 5000))
        setLoad(true)
    }

    useEffect(() => {
        const onLoad = () => {
            trackPromise(
                FetchTest().then(() => {
                    setLoad(false)
                }),
            )
        }
        onLoad()
    }, [])*/

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            ((event).key === 'Tab' ||
                (event).key === 'Shift')
        ) {
            return
        }
        setShowDrawer(!open)
    }

    return (
        <F.FlySearchContainer>
            <F.FlySearchHeader>
                <h1 className='font-normal text-[#2564CF]'>Resultados</h1>
            </F.FlySearchHeader>
            <F.FlySearchBody>
                {flightInfo.map((flight, index) => (
                    <F.FlySearchContent key={index} className='shadow-lg my-5'>
                        <F.FlySearchContentLogo>
                            <img src={logo} alt='logo' className='md:w-full w-auto h-full' />
                        </F.FlySearchContentLogo>
                        <F.FlySearchContentBody>
                            <div className='md:w-auto w-full justify-between flex items-center gap-5'>
                                <div className='flex flex-col'>
                                    <p className='md:text-base text-sm'>{flight.origin.time}</p>
                                    <p className='md:text-sm text-xs text-[#666666]'>{flight.origin.shortName}</p>
                                </div>
                                <GiAirplaneDeparture size={30} />
                                <div className='flex flex-col'>
                                    <p className='md:text-base text-sm'>{flight.destiny.time}</p>
                                    <p className='md:text-sm text-xs text-[#666666]'>{flight.destiny.shortName}</p>
                                </div>
                                <button
                                    className='md:mx-4 mx-2 text-[#2564CF] text-[14px] font-semibold border-none bg-transparent'
                                    onClick={() => setShowDrawer(true)}
                                >
                                    Detalhes
                                </button>
                                <div className=''>
                                    <p className='md:text-base text-sm'>{flight.duration}</p>
                                    {flight.scale && <p className='md:text-sm text-xs text-[#666666]'>Direto</p>}
                                </div>
                            </div>
                            <div className='flex md:gap-3 sm:gap-20 gap-10 self-center'>
                                {
                                    flight.hasEconomic && (
                                        <div
                                            className={`
                                                flex lg:flex-row flex-col items-center justify-center
                                                gap-5 bg-white shadow-lg hover:shadow-2xl hover:rounded-lg
                                                duration-300 min-h-[50px] cursor-pointer px-4 lg:py-5 py-2
                                            `}
                                            onClick={() => setShowModal(true)}
                                        >
                                            <p className='font-bold text-xs'>Económica</p>
                                            <span className='text-xs font-bold text-[#666666]'>
                                                {flight.economic.price}
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    flight.hasExecutive && (
                                        <div
                                            className={`
                                                flex lg:flex-row flex-col items-center justify-center
                                                gap-5 bg-white shadow-lg hover:shadow-2xl hover:rounded-lg
                                                duration-300 min-h-[50px] cursor-pointer px-4 lg:py-5 py-2
                                            `}
                                            onClick={() => setShowModal(true)}
                                        >
                                            <p className='font-bold text-xs'>Executiva</p>
                                            <span className='text-xs font-bold text-[#666666]'>
                                                {flight.executive.price}
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                        </F.FlySearchContentBody>
                    </F.FlySearchContent>
                ))}
            </F.FlySearchBody>
            <Drawer
                anchor='right'
                open={showDrawer}
                onClose={toggleDrawer(true)}
            >
                <FlightDetails />
            </Drawer>
            <Modal
                open={showModal}
                handleClose={() => setShowModal(false)}
                title={ modalSteps[state.currentStep].title }
            >
                { modalSteps[state.currentStep].children }
            </Modal>
        </F.FlySearchContainer>
    )
}

export default FlySearchResult