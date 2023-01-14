import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useBooking } from '../../contexts/BookingContext'

const BookingForm = () => {
    const { dispatch } = useBooking()
    const [documentType, setDocumentType] = useState('')
    const options = [
        { label: 'Passaporte', value: 'passport' },
    ]

    return (
        <Grid item container spacing={1} justify='center'>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    label='Primeiro nome'
                    variant='outlined'
                    fullWidth
                    name='firstName'
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    label='Último nome'
                    variant='outlined'
                    fullWidth
                    name='lastName'
                />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth variant='outlined'>
                    <InputLabel id='demo-simple-select-outlined-label'>
                        Tipo de Documento
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-outlined-label'
                        id='demo-simple-select-outlined'
                        label='Tipo de Documento'
                        name='occupation'
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                    >
                        {options.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            {
                documentType === 'passport' && (
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            label='Nº do passaporte'
                            variant='outlined'
                            fullWidth
                            name='passport'
                        />
                    </Grid>
                )
            }
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    name='email'
                />
            </Grid>
            <Grid item xs={12} sm={6} md={12} marginTop={5}>
                <Button
                    variant='contained'
                    color='primary'
                    type='Submit'
                    onClick={() => dispatch({
                        type: 'setCurrentStep',
                        payload: 1,
                    })}
                >
                    Escolher lugar
                </Button>
            </Grid>
        </Grid>
    )
}

export default BookingForm