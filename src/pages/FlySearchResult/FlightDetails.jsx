import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { GiAirplaneDeparture } from 'react-icons/gi'

import logo from '../../assets/images/logo.png'

const FlightDetails = (props) => {
    const { flight } = props
    console.log(flight.image)

    return (
        <Box
            sx={{ width: 550 }}
            role='presentation'
        >
            <div className='px-8 py-4'>
                <h1 className='text-xl'>De {flight.origin.name} para {flight.destiny.name}</h1>
                <p className='text-sm'>Duração: {flight.duration}</p>
            </div>
            <div>
                <div>
                    <img src={flight.image} alt='destiny' className='w-full h-56' />
                </div>
            </div>
            <div className='w-full justify-between flex items-center gap-5 px-5 mt-[130px]'>
                <div className='w-10 h-10'>
                    <img src={logo} alt='logo' className='md:w-full w-auto h-full' />
                </div>
                <div className='flex flex-col'>
                    <p className='text-sm'>{flight.origin.time}</p>
                    <p className='text-xs text-[#666666]'>{flight.origin.shortName}</p>
                </div>
                <GiAirplaneDeparture size={30} />
                <div className='flex flex-col'>
                    <p className='text-sm'>{flight.destiny.time}</p>
                    <p className='text-xs text-[#666666]'>{flight.destiny.shortName}</p>
                </div>
                <div className=''>
                    <p className='text-sm'>{flight.duration}</p>
                    {flight.scale && <p className='text-xs text-[#666666]'>Direto</p>}
                </div>
            </div>
        </Box>
    )
}

FlightDetails.propTypes = {
    flight: PropTypes.any.isRequired,
}

export default FlightDetails