import React, { useState } from 'react'
import { AlertSuccess } from '../../utils/Alert'

const SelectPlace = () => {
    const [selectedPlaces, setSelectedPlaces] = useState([])

    const info = {
        lugares: [
            { id: 1, state: 1 }, { id: 2, state: 1 }, { id: 3, state: 0 }, { id: 4, state: 1 },
            { id: 5, state: 0 }, { id: 6, state: 0 }, { id: 7, state: 1 }, { id: 8, state: 1 },
            { id: 9, state: 1 }, { id: 10, state: 0 }, { id: 11, state: 1 }, { id: 12, state: 1 },
            { id: 13, state: 1 }, { id: 14, state: 0 }, { id: 15, state: 0 }, { id: 16, state: 1 },
            { id: 17, state: 1 }, { id: 18, state: 0 }, { id: 19, state: 0 }, { id: 20, state: 1 },
            { id: 21, state: 0 }, { id: 22, state: 0 }, { id: 23, state: 1 }, { id: 24, state: 0 },
            { id: 25, state: 0 }, { id: 26, state: 0 }, { id: 27, state: 0 }, { id: 28, state: 0 },
            { id: 29, state: 0 }, { id: 30, state: 1 }, { id: 31, state: 0 }, { id: 32, state: 0 },
            { id: 33, state: 0 }, { id: 34, state: 1 }, { id: 35, state: 0 }, { id: 36, state: 0 },
            { id: 37, state: 0 }, { id: 38, state: 0 }, { id: 39, state: 0 }, { id: 40, state: 0 },
            { id: 41, state: 0 }, { id: 42, state: 0 }, { id: 43, state: 0 }, { id: 44, state: 0 },
            { id: 45, state: 0 }, { id: 46, state: 1 }, { id: 47, state: 1 }, { id: 48, state: 0 },
            { id: 49, state: 1 },
        ],
    }
    const rows = parseInt(info.lugares.length / 7)

    const handleSelectPlace = (place, estado) => {
        if (estado == '1') return

        if (selectedPlaces.includes(place)) {
            setSelectedPlaces(selectedPlaces.filter(p => p !== place))
        } else {
            setSelectedPlaces([...selectedPlaces, place])
        }
    }

    const handleReserve = () => {
        if (selectedPlaces.length === 0) {
            return
        }

        AlertSuccess({
            title: 'Successo',
            description: 'Reserva efetuada com sucesso ✅',
            confirm: () => window.location.reload(),
            message: 'Baixe o seu recibo',
        })
    }

    return (
        <div className='w-full min-h-[500px] flex flex-col items-center gap-y-5'>
            <div className='flex gap-x-5 mb-5'>
                <div className='flex items-center gap-x-3'>
                    <p>Disponível:</p>
                    <div className='bg-[#555] w-3 h-3 rounded-full shadow-xl' />
                </div>
                <div className='flex items-center gap-x-3'>
                    <p>Ocupado:</p>
                    <div className='bg-[#C00] w-3 h-3 rounded-full shadow-xl' />
                </div>
                <div className='flex items-center gap-x-3'>
                    <p>Selecionado:</p>
                    <div className='bg-[#090] w-3 h-3 rounded-full shadow-xl' />
                </div>
            </div>

            <div className='w-full flex items-center'>
                <div className='mr-auto' />

                <div className='mx-auto flex gap-1'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>A</div>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>B</div>
                </div>
                <div className='mx-auto flex gap-1'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>C</div>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>D</div>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>E</div>
                </div>
                <div className='mx-auto flex gap-1'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>F</div>
                    <div className='w-[30px] h-[30px] flex justify-center items-center'>G</div>
                </div>
            </div>

            {
                    Array.from({ length: rows }, (_, idx) => `${idx}`).map((i, index) => (
                        <div key={index} className='w-full flex items-center'>
                            <div className='mr-auto'>{index+1}</div>

                            <div className='mx-auto flex gap-1'>
                                {
                                    info.lugares.slice(7*i, 7*i+2).map((lugar, index2) => (
                                        <div
                                            key={index2}
                                            className={`
                                                w-[30px] h-[30px] flex items-center justify-center
                                                cursor-pointer hover:scale-105 duration-300
                                                rounded-md text-white bg-[#555]
                                                ${lugar.state == '1' ? 'bg-[#C00]' : 'cursor-pointer hover:scale-105 duration-300 ' + (selectedPlaces.includes(lugar.id) ? 'bg-[#090]' : 'bg-[#555]')}
                                            `}
                                            onClick={() => handleSelectPlace(lugar.id, lugar.state)}
                                        >
                                            {lugar.id}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex gap-1 mx-auto'>
                                {
                                    info.lugares.slice(7*i+2, 7*i+5).map((lugar, index2) => (
                                        <div
                                            key={index2}
                                            className={`
                                                w-[30px] h-[30px] flex items-center justify-center
                                                cursor-pointer hover:scale-105 duration-300
                                                rounded-md text-white bg-[#555]
                                                ${lugar.state == '1' ? 'bg-[#C00]' : 'cursor-pointer hover:scale-105 duration-300 ' + (selectedPlaces.includes(lugar.id) ? 'bg-[#090]' : 'bg-[#555]')}
                                            `}
                                            onClick={() => handleSelectPlace(lugar.id, lugar.state)}
                                        >
                                            {lugar.id}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex gap-1 mx-auto'>
                                {
                                    info.lugares.slice(7*i+5, 7*i+7).map((lugar, index2) => (
                                        <div
                                            key={index2}
                                            className={`
                                                w-[30px] h-[30px] flex items-center justify-center
                                                cursor-pointer hover:scale-105 duration-300
                                                rounded-md text-white bg-[#555]
                                                ${lugar.state == '1' ? 'bg-[#C00]' : 'cursor-pointer hover:scale-105 duration-300 ' + (selectedPlaces.includes(lugar.id) ? 'bg-[#090]' : 'bg-[#555]')}
                                            `}
                                            onClick={() => handleSelectPlace(lugar.id, lugar.state)}
                                        >
                                            {lugar.id}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
            }

            {selectedPlaces.length > 0 ?
                (
                    <button
                        className={`
                            p-2 w-full mt-6 origin-bottom border-none
                            duration-500 transition-all text-white rounded-md
                            bg-[#B81D24] hover:bg-[#980D14] hover:scale-105
                        `}
                        type='submit'
                        onClick={handleReserve}
                    >
                        Compre por {selectedPlaces.length * 5000} kz
                    </button>
                )
                : null
            }
        </div>
    )
}

export default SelectPlace

/*
{
                    info.lugares.map((lugar, index) => (
                        <div
                            key={index}
                            className={`
                                w-full h-full flex items-center justify-center
                                rounded-md text-white
                                ${lugar.state == '1' ? 'bg-[#C00]' : 'cursor-pointer hover:scale-105 duration-300 ' + (selectedPlaces.includes(lugar.id) ? 'bg-[#090]' : 'bg-[#555]')}
                            `}
                            onClick={() => handleSelectPlace(lugar.id, lugar.state)}
                        >
                            {index+1}
                        </div>
                    ))
                }

                <div className='flex gap-1 mx-auto'>
                    {
                        [1, 2].map((i, index) => (
                            <div
                                key={index}
                                className={`
                                    w-[30px] h-[30px] flex items-center justify-center
                                    cursor-pointer hover:scale-105 duration-300
                                    rounded-md text-white bg-[#555]
                                `}
                            >
                                {i}
                            </div>
                        ))
                    }
                </div>
                <div className='mr-auto'>1</div>
*/