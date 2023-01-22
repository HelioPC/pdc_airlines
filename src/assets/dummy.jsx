import React from 'react'
import { GiStairsGoal } from 'react-icons/gi'
import { MdLuggage, MdLunchDining, MdOutlineAirlineSeatReclineExtra, MdOutlineSwapHorizontalCircle, MdArrowCircleUp } from 'react-icons/md'
import { RiLuggageCartFill } from 'react-icons/ri'

export const flightInfo = [
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
        image: '/src/assets/images/bali.jpeg',
        duration: '7h 15min',
        scale: false,
        hasEconomic: true,
        economic: {
            price: '390.000 kz',
            rawPrice: 390000,
            rates: [
                {
                    title: 'Discount',
                    percentage: 0,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                    ],
                },
                {
                    title: 'Classic',
                    percentage: 0.4,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: false,
                        },
                    ],
                },
                {
                    title: 'Plus',
                    percentage: 0.75,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: true,
                        },
                        {
                            name: 'Milhas',
                            icon: <MdArrowCircleUp />,
                            present: true,
                        },
                    ],
                },
            ],
        },
        hasExecutive: true,
        executive: {
            price: '990.000 kz',
            rawPrice: 990000,
            rates: [
                {
                    title: 'Executive',
                    percentage: 0.4,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar executive',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: false,
                        },
                    ],
                },
                {
                    title: 'Top X',
                    percentage: 0.75,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar executive',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: true,
                        },
                        {
                            name: 'Milhas',
                            icon: <MdArrowCircleUp />,
                            present: true,
                        },
                        {
                            name: 'Embarque premium',
                            icon: <GiStairsGoal />,
                            present: true,
                        },
                    ],
                },
            ],
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
        image: '/src/assets/images/bali.jpeg',
        duration: '7h 15min',
        scale: false,
        hasEconomic: true,
        economic: {
            price: '390.000 kz',
            rawPrice: 390000,
            rates: [
                {
                    title: 'Discount',
                    percentage: 0,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                    ],
                },
                {
                    title: 'Classic',
                    percentage: 0.4,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: false,
                        },
                    ],
                },
                {
                    title: 'Plus',
                    percentage: 0.75,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: true,
                        },
                        {
                            name: 'Milhas',
                            icon: <MdArrowCircleUp />,
                            present: true,
                        },
                    ],
                },
            ],
        },
        hasExecutive: true,
        executive: {
            price: '990.000 kz',
            rawPrice: 990000,
            rates: [
                {
                    title: 'Discount',
                    percentage: 0,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                    ],
                },
                {
                    title: 'Classic',
                    percentage: 0.4,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: false,
                        },
                    ],
                },
                {
                    title: 'Plus',
                    percentage: 0.75,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: true,
                        },
                        {
                            name: 'Milhas',
                            icon: <MdArrowCircleUp />,
                            present: true,
                        },
                    ],
                },
            ],
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
        image: '/src/assets/images/bali.jpeg',
        duration: '7h 15min',
        scale: false,
        hasEconomic: true,
        economic: {
            price: '390.000 kz',
            rawPrice: 390000,
            rates: [
                {
                    title: 'Discount',
                    percentage: 0,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                    ],
                },
                {
                    title: 'Classic',
                    percentage: 0.4,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: false,
                        },
                    ],
                },
                {
                    title: 'Plus',
                    percentage: 0.75,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: true,
                        },
                        {
                            name: 'Milhas',
                            icon: <MdArrowCircleUp />,
                            present: true,
                        },
                    ],
                },
            ],
        },
        hasExecutive: true,
        executive: {
            price: '990.000 kz',
            rawPrice: 990000,
            rates: [
                {
                    title: 'Discount',
                    percentage: 0,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                    ],
                },
                {
                    title: 'Classic',
                    percentage: 0.4,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: false,
                        },
                    ],
                },
                {
                    title: 'Plus',
                    percentage: 0.75,
                    bonus: [
                        {
                            name: 'Refeição',
                            icon: <MdLunchDining />,
                            present: true,
                        },
                        {
                            name: 'Bagagem',
                            icon: <MdLuggage />,
                            present: true,
                        },
                        {
                            name: '2 x Bagagem de porão',
                            icon: <RiLuggageCartFill />,
                            present: true,
                        },
                        {
                            name: 'Lugar comfort',
                            icon: <MdOutlineAirlineSeatReclineExtra />,
                            present: true,
                        },
                        {
                            name: 'Permite alterações',
                            icon: <MdOutlineSwapHorizontalCircle />,
                            present: true,
                        },
                        {
                            name: 'Milhas',
                            icon: <MdArrowCircleUp />,
                            present: true,
                        },
                    ],
                },
            ],
        },
    },
]
