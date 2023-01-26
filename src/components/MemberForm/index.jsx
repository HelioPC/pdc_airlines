import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import PI from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { AlertSuccess } from '../../utils/Alert'
import { useUser } from '../../contexts/UserContext'

const ReactPhoneInput = PI.default ? PI.default : PI

const MemberForm = (props) => {
    const [documentType, setDocumentType] = useState('')
    const [genre, setGenre] = useState('')
    const [date, setDate] = useState()
    const { dispatch } = useUser()
    const options = [
        { label: 'Passaporte', value: 'passport' },
    ]
    const { closeModal } = props

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
                <ReactPhoneInput
                    inputStyle={{
                        width: '100%',
                        height: '57px',
                    }}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                      }}
                    placeholder='(+244) XXX XXX XXX'
                    specialLabel={''}
                    country={'ao'}
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
            <Grid item xs={12} sm={6} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Data de nascimento'
                        value={date}
                        className='w-full'
                        onChange={(newValue) => {
                            setDate(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='action'
                        name='gender'
                        row
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <FormControlLabel value='Action' control={<Radio />} label='Masculino' />
                        <FormControlLabel value='Comedy' control={<Radio />} label='Feminino' />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item marginTop={3}>
                <Button
                    variant='contained'
                    type='Submit'
                    style={{
                        backgroundColor: 'black',
                    }}
                    onClick={() => dispatch({
                        type: 'setState',
                        payload: 1,
                    })}
                >
                    Já sou membro
                </Button>
            </Grid>
            <Grid item marginTop={3}>
                <Button
                    variant='contained'
                    color='primary'
                    type='Submit'
                    onClick={handleReserve}
                >
                    Submeter
                </Button>
            </Grid>
        </Grid>
    )
}

MemberForm.propTypes = {
    closeModal: PropTypes.func.isRequired,
}

export default MemberForm
