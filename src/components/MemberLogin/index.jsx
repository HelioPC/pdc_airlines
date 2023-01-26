import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const MemberLogin = (props) => {
    const { closeModal } = props

    return (
        <Grid item container spacing={1} justify='center'>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    name='email'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField
                    label='Pin'
                    variant='outlined'
                    fullWidth
                    name='pin'
                    type='password'
                />
            </Grid>
            <Grid item xs={12} sm={12} md={12} marginTop={3}>
                <Button
                    variant='contained'
                    color='primary'
                    type='Submit'
                    fullWidth
                    onClick={closeModal}
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
