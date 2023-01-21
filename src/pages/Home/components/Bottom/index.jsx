import { TextField } from '@mui/material'
import React from 'react'

import * as B from './style'

const Bottom = () => {
    return (
        <B.BottomContainer id='news'>
            <B.BottomNewsletter>
                <B.BottomNewsletterBody>
                    <B.BottomNewsletterContent>
                        <h3>Nunca perca uma oferta</h3>
                        <p>Inscreva-se e seja o primeiro a receber nossas ofertas exclusivas.</p>
                        <TextField
                            label='Endereço de e-mail'
                            id='outlined-basic'
                            sx={{
                                maxWidth: '250px',
                                '& label.Mui-focused': {
                                    color: 'white',
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
                                        borderColor: 'white',
                                    },
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    'color': 'white',
                                },
                            }}
                        />
                        <div className='flex items-center gap-2'>
                            <input type='checkbox' name='' id='' />
                            <span className='text-[13px] font-bold'>
                                Sim, gostaria de receber novidades e ofertas da PDC - Airlines
                            </span>
                        </div>
                        <a href='/' className='flex justify-center max-w-[182px] border-white border border-solid text-white py-3 px-5'>
                            Assinar
                        </a>
                    </B.BottomNewsletterContent>
                </B.BottomNewsletterBody>
            </B.BottomNewsletter>
        </B.BottomContainer>
    )
}

export default Bottom