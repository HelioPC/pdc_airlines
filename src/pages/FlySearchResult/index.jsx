import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { MdCheckCircle } from 'react-icons/md'

import * as F from './style'
import logo from '../../assets/images/logo.png'
import FlightDetails from './FlightDetails'
import Modal from '../../components/Modal'
import SelectPlace from '../../components/SelectPlace'
import { flightInfo } from '../../assets/dummy'
import Footer from '../../components/Footer'

const FlySearchResult = () => {
    const [showDrawer, setShowDrawer] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [details, setDetails] = useState({})
    let hasResults = true

    const closeModal = () => {
        setShowModal(false)
    }

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

    const toggleDetails = (info, open) => {
        setDetails(info)
        setShowDrawer(open)
    }

    return (
        <F.FlySearchContainer>
            <F.FlySearchHeader>
                <h1 className='font-normal text-[#2564CF]'>Resultados</h1>
            </F.FlySearchHeader>
            {
                hasResults ? (
                    <F.FlySearchBody>
                    {flightInfo.map((flight, index) => {
                        const [showEconomicRates, setShowEconomicRates] = useState(false)
                        const [showExecutiveRates, setShowExecutiveRates] = useState(false)

                        const toggleEconomicRates = () => {
                            if(!showEconomicRates) {
                                if(showExecutiveRates) {
                                    setShowExecutiveRates(false)
                                    setShowEconomicRates(true)
                                } else {
                                    setShowEconomicRates(true)
                                }
                            } else setShowEconomicRates(false)
                        }

                        const toggleExecutiveRates = () => {
                            if(!showExecutiveRates) {
                                if(showEconomicRates) {
                                    setShowEconomicRates(false)
                                    setShowExecutiveRates(true)
                                } else {
                                    setShowExecutiveRates(true)
                                }
                            } else setShowExecutiveRates(false)
                        }

                        return (
                            <div key={index}>
                                <F.FlySearchContent className='shadow-lg my-5'>
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
                                                onClick={() => toggleDetails(flight, true)}
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
                                                        onClick={() => toggleEconomicRates()}
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
                                                        onClick={() => toggleExecutiveRates()}
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

                                {
                                    (showEconomicRates) &&
                                    (
                                        <F.FlyRatesContent>
                                            {
                                                flight.economic.rates.map((rate, i) => (
                                                    <F.FlyRatesCard className='shadow-xl' key={i}>
                                                        <F.FlyRatesCardHeader>
                                                            <h2 className='text-lg'>{rate.title}</h2>
                                                            <span className='font-bold text-xs text-[#2564CF]'>
                                                                Condições tarifárias
                                                            </span>
                                                        </F.FlyRatesCardHeader>
                                                        <F.FlyRatesCardBody>
                                                            {
                                                                rate.bonus.map((b, i) => (
                                                                    <div className='flex justify-between' key={i}>
                                                                        <div className='flex items-center'>
                                                                            {b.icon}
                                                                            <span className='text-sm'>
                                                                                {b.name}
                                                                            </span>
                                                                        </div>
                                                                        {
                                                                            b.present ? (
                                                                                <MdCheckCircle color='#25a30c' />
                                                                            ) : (
                                                                                <AiFillCloseCircle color='#a30c0c' />
                                                                            )
                                                                        }
                                                                    </div>
                                                                ))
                                                            }
                                                        </F.FlyRatesCardBody>
                                                        <F.FlyRatesCardBottom>
                                                            <span className='text-sm font-bold'>
                                                                {flight.economic.rawPrice + flight.economic.rawPrice * rate.percentage} kz
                                                            </span>
                                                            <button
                                                                className='text-white bg-[#2564CF] p-2 border-none rounded-md'
                                                                onClick={() => {
                                                                    setShowModal(true)
                                                                    console.log(flight, rate)
                                                                }}
                                                            >
                                                                Selecionar
                                                            </button>
                                                        </F.FlyRatesCardBottom>
                                                    </F.FlyRatesCard>
                                                ))
                                            }
                                        </F.FlyRatesContent>
                                    )
                                }
                                {
                                    (showExecutiveRates) &&
                                    (
                                        (
                                            <F.FlyRatesContent>
                                                {
                                                    flight.executive.rates.map((rate, i) => (
                                                        <F.FlyRatesCard className='shadow-xl' key={i}>
                                                            <F.FlyRatesCardHeader>
                                                                <h2 className='text-lg'>{rate.title}</h2>
                                                                <span className='font-bold text-xs text-[#2564CF]'>
                                                                    Condições tarifárias
                                                                </span>
                                                            </F.FlyRatesCardHeader>
                                                            <F.FlyRatesCardBody>
                                                                {
                                                                    rate.bonus.map((b, i) => (
                                                                        <div className='flex justify-between' key={i}>
                                                                            <div className='flex items-center'>
                                                                                {b.icon}
                                                                                <span className='text-sm'>
                                                                                    {b.name}
                                                                                </span>
                                                                            </div>
                                                                            {
                                                                                b.present ? (
                                                                                    <MdCheckCircle color='#25a30c' />
                                                                                ) : (
                                                                                    <AiFillCloseCircle color='#a30c0c' />
                                                                                )
                                                                            }
                                                                        </div>
                                                                    ))
                                                                }
                                                            </F.FlyRatesCardBody>
                                                            <F.FlyRatesCardBottom>
                                                                <span className='text-sm font-bold'>
                                                                    {flight.executive.rawPrice + flight.executive.rawPrice * rate.percentage} kz
                                                                </span>
                                                                <button
                                                                    className='text-white bg-[#2564CF] p-2 border-none rounded-md'
                                                                    onClick={() => {
                                                                        setShowModal(true)
                                                                        console.log(flight, rate)
                                                                    }}
                                                                >
                                                                    Selecionar
                                                                </button>
                                                            </F.FlyRatesCardBottom>
                                                        </F.FlyRatesCard>
                                                    ))
                                                }
                                            </F.FlyRatesContent>
                                        )
                                    )
                                }
                            </div>
                        )
                    })}
                    </F.FlySearchBody>
                ) :
                (
                    <div className='w-full h-[60vh] flex sm:flex-row flex-col gap-3 justify-center items-center'>
                        <p>Nada para mostrar</p>
                        <a href='/' className='bg-[#2564CF] p-3 text-white rounded-lg hover:scale-105'>
                            Início
                        </a>
                    </div>
                )
            }
            <Drawer
                anchor='right'
                open={showDrawer}
                onClose={toggleDrawer(true)}
            >
                <FlightDetails flight={details} />
            </Drawer>
            <Modal
                open={showModal}
                handleClose={() => setShowModal(false)}
                title='Selecione o seu lugar'
            >
                <SelectPlace closeModal={closeModal} />
            </Modal>
            <Footer />
        </F.FlySearchContainer>
    )
}

export default FlySearchResult