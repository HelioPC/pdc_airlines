/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Aos from 'aos'
import 'aos/dist/aos.css'

import * as C from './style'
import arrow from '../../../../assets/images/down-arrow.svg'

// https://www.youtube.com/watch?v=79rgF2VK_4E

const Welcome = ({ title, description, background }) => {
    const [trip, setTrip] = useState('')
    const [origin, setOrigin] = useState('')
    const [destiny, setDestiny] = useState('')
    const [date, setDate] = useState(null)

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <C.Wrap bgImage={background}>
            <C.ItemText data-aos='fade-up'>
                <h1>{title}</h1>
                <p>{description}</p>
            </C.ItemText>

            <C.Box>
                <FormControl
                    sx={{
                        minWidth: 250,
                        '& label.Mui-focused': {
                            // color: 'white',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'yellow',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                                borderRadius: 0,
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                // borderColor: 'yellow',
                            },
                        },
                    }}
                >
                    <InputLabel id='demo-simple-select-label'>Origem</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={origin}
                        label='Origem'
                        onChange={(e) => setOrigin(e.target.value)}
                        sx={{
                            transitionDuration: '500ms',
                            ':hover': {
                                boxShadow: 'black 10px 10px 50px 0px',
                            },
                        }}
                    >
                        <MenuItem value='a'>Ida e volta</MenuItem>
                        <MenuItem value='b'>Só ida</MenuItem>
                        <MenuItem value='c'>Múltiplas cidades</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    sx={{
                        minWidth: 250,
                        '& label.Mui-focused': {
                            // color: 'white',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'yellow',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                                borderRadius: 0,
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                // borderColor: 'yellow',
                            },
                        },
                    }}
                >
                    <InputLabel id='demo-simple-select-label'>Destino</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={destiny}
                        label='Destino'
                        onChange={(e) => setDestiny(e.target.value)}
                        sx={{
                            transitionDuration: '500ms',
                            ':hover': {
                                boxShadow: 'black 10px 10px 50px 0px',
                            },
                        }}
                    >
                        <MenuItem value='a'>Ida e volta</MenuItem>
                        <MenuItem value='b'>Só ida</MenuItem>
                        <MenuItem value='c'>Múltiplas cidades</MenuItem>
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Data'
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} sx={{
                            minWidth: 250,
                            '& label.Mui-focused': {
                                // color: 'white',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'yellow',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                    borderRadius: 0,
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    // borderColor: 'yellow',
                                },
                            },
                        }} />}
                    />
                </LocalizationProvider>
                <FormControl
                    sx={{
                        minWidth: 250,
                        '& label.Mui-focused': {
                            // color: 'white',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: 'yellow',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white',
                                borderRadius: 0,
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                // borderColor: 'yellow',
                            },
                        },
                    }}
                >
                    <InputLabel id='demo-simple-select-label'>Preço</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={trip}
                        label='Preço'
                        onChange={(e) => setTrip(e.target.value)}
                        sx={{
                            transitionDuration: '500ms',
                            ':hover': {
                                boxShadow: 'black 10px 10px 50px 0px',
                            },
                        }}
                    >
                        <MenuItem value='a'>90.000 - 200.000 kz</MenuItem>
                        <MenuItem value='b'>200.000 - 500.000 kz</MenuItem>
                        <MenuItem value='c'>&gt; 500.000 kz</MenuItem>
                    </Select>
                </FormControl>
                <C.BoxButton>Search</C.BoxButton>
            </C.Box>

            <C.DownArrow src={arrow} />
        </C.Wrap >
    )
}

export default Welcome
