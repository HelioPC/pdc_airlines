import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useUser, ValidUsers } from '../../contexts/UserContext'
import { AlertError, AlertSuccess } from '../../utils/Alert'

export const MemberLogin = (props) => {
    const { closeModal } = props
    const { dispatch } = useUser()
    const [email, setEmail] = useState('')
    const [pin, setPin] = useState(0)

    const handleLogin = () => {
        const memberAuth = ValidUsers.find(u => u.email === email && pin == u.password)

        if(memberAuth === undefined) {
            closeModal()
            AlertError({
                title: 'Erro',
                description: 'O email ou o pin estão incorretos',
                confirm: () => window.location.reload(),
            })
            return
        }

        delete memberAuth['password']
        dispatch({
            type: 'setUser',
            payload: memberAuth,
        })
        localStorage.setItem('userPDCAirlines2023', JSON.stringify(memberAuth))
        closeModal()
        AlertSuccess({
            title: 'Sucesso',
            description: 'Membro autenticado',
            confirm: () => window.location.reload(),
        })
    }

    return (
        <Grid item container spacing={1} justify='center'>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} marginTop={2}>
                <TextField
                    label='Pin'
                    variant='outlined'
                    fullWidth
                    name='pin'
                    type='password'
                    inputMode='numeric'
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} marginTop={4}>
                <Button
                    variant='contained'
                    color='primary'
                    type='Submit'
                    fullWidth
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Grid>
        </Grid>
    )
}

MemberLogin.propTypes = {
    closeModal: PropTypes.func.isRequired,
}

export default MemberLogin
