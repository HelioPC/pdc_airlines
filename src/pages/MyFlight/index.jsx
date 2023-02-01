import React, { useState } from 'react'
import { MdAirplanemodeActive, MdRemoveRedEye, MdSearch } from 'react-icons/md'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import { ThreeDots } from 'react-loader-spinner'

import * as S from './style'
import Header from '../../components/Header'
import { flightInfo } from '../../assets/dummy'
import logo from '../../assets/images/logo.png'

const LoadingIndicator = () => {
	const { promiseInProgress } = usePromiseTracker()

	return (
		promiseInProgress &&
		<div className='w-full h-56 flex justify-center items-center'>
            <ThreeDots 
                height='80' 
                width='80' 
                radius='9'
                color='#FFF' 
                ariaLabel='three-dots-loading'
                wrapperStyle={{}}
                wrapperClassName=''
                visible={true}
            />
        </div>
	)
}

const MyFlight = () => {
    const [flightId, setFlightId] = useState('')
    const [flightResult, setFlightResult] = useState()
    const [showFlight, setShowFlight] = useState(false)
    const [disable, setDisable] = useState(false)

    const FetchTest = async () => {
		await new Promise(res => setTimeout(res, 5000))
	}

    const handleClick = async () => {
        if(flightId === '') return
        setDisable(true)
        setShowFlight(false)
        await trackPromise(
			FetchTest().then(() => {
                console.log(flightInfo.find(f => f.id == flightId))
                setFlightResult(flightInfo.find(f => f.id == flightId))
                setShowFlight(true)
                setDisable(false)
			}),
		)
    }

    return (
        <S.SearchContainer>
            <Header />
            <S.SearchHeader>
                <h1>Encontre o seu voo</h1>
            </S.SearchHeader>

            <S.SearchBody>
                <S.SearchContent>
                    <S.SearchInputArea>
                        <div>
                            <MdAirplanemodeActive size={24} color='#FFF' />
                            <input
                                placeholder='Id do seu voo'
                                value={flightId}
                                onChange={(e) => setFlightId(e.target.value)}
                                disabled={disable}
                                className={`${disable && 'cursor-not-allowed'}`}
                            />
                        </div>
                        <button
                            className={`
                                ${disable ? 'bg-[#CCC] cursor-not-allowed' : 'bg-[#ffffff3c]'}
                                border-none flex p-2 hover:rounded-lg duration-500
                            `}
                            disabled={disable}
                            onClick={handleClick}
                        >
                            <MdSearch size={25} color='#FFF' />
                        </button>
                    </S.SearchInputArea>
                </S.SearchContent>
            </S.SearchBody>

            {
                showFlight && (
                    flightResult !== undefined ? (
                    <S.FlySearchBody>
                        <div>
                            <S.FlySearchContent className='shadow-lg my-5 text-black'>
                                <S.FlySearchContentLogo>
                                    <img src={logo} alt='logo' className='md:w-full w-auto h-full' />
                                </S.FlySearchContentLogo>
                                <S.FlySearchContentBody>
                                    <div className='md:w-auto w-full justify-between flex items-center gap-5 text-white'>
                                        <div className='flex flex-col items-center'>
                                            <p className='md:text-base text-sm'>{flightResult.origin.time}</p>
                                            <p className='md:text-sm text-xs text-[#CCC]'>{flightResult.origin.shortName}</p>
                                        </div>
                                        <GiAirplaneDeparture size={30} />
                                        <div className='flex flex-col items-center'>
                                            <p className='md:text-base text-sm'>{flightResult.destiny.time}</p>
                                            <p className='md:text-sm text-xs text-[#CCC]'>{flightResult.destiny.shortName}</p>
                                        </div>
                                    </div>
                                    <button
                                        className='md:mx-4 mx-2 text-[14px] font-semibold border-none bg-transparent'
                                        onClick={() => { }}
                                    >
                                        <MdRemoveRedEye size={30} color='#FFF' />
                                    </button>
                                </S.FlySearchContentBody>
                            </S.FlySearchContent>
                        </div>
                    </S.FlySearchBody>
                ) : (
                    <div className='w-full h-56 flex justify-center items-center'>
                        <p>Não existem voos com o este identificador</p>
                    </div>
                )
                )
            }
            <LoadingIndicator />
        </S.SearchContainer >
    )
}

export default MyFlight