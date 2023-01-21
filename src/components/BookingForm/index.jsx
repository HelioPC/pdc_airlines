import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { AlertSuccess } from '../../utils/Alert'

const BookingForm = (props) => {
    const [documentType, setDocumentType] = useState('')
    const options = [
        { label: 'Passaporte', value: 'passport' },
    ]
    const { closeModal } = props

    console.log(closeModal)

    const handleReserve = () => {
        if (documentType === '') {
            return
        }

        closeModal()

        AlertSuccess({
            title: 'Successo',
            description: 'Reserva efetuada com sucesso ✅',
            confirm: () => window.location.reload(),
            message: 'Baixe o seu recibo',
        })
    }

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
                    onClick={handleReserve}
                >
                    Escolher lugar
                </Button>
            </Grid>
        </Grid>
    )
}

BookingForm.propTypes = {
    closeModal: PropTypes.func.isRequired,
}

export default BookingForm