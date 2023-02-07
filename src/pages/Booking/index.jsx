/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch'
import { Tooltip } from '@mui/material'
import { BsPlusCircleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import PI from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { AlertError, AlertSuccess } from '../../utils/Alert'
import Logo from '../../assets/images/logo.png'

const ReactPhoneInput = PI.default ? PI.default : PI

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        max-width: 960px;
    }
`

export const BoxButton = styled.button`
width: 100%;
    background: #2564CF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: white;
    padding: 10px;
    transition: all ease .5s;

    &:hover {
            background: #0544AF;
            border-radius: 10px;
        }
`

const FloatingAddButton = ({ onClick, title }) => {
    return (
        <Tooltip title={title} arrow placement='top'>
            <button className='fixed bottom-10 right-10 flex duration-500 border-none bg-transparent' onClick={onClick}>
                <BsPlusCircleFill size={45} />
            </button>
        </Tooltip>
    )
}

const Booking = () => {
    const [clients, setClients] = useState([])
    const [nome, setNome] = useState('')
    const [titulo, setTitulo] = useState('')
    const [email, setEmail] = useState('')
    const [sobreNome, setSobreNome] = useState('')
    const [telefone, setTelefone] = useState(0)
    const [data, setData] = useState('2000/10/04')
    const [disable, setDisable] = useState(true)
    const [formChild, setFormChild] = useState(false)
    const qtd = 4
    const url = useParams()
    /*const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!location.state?.fromApp) {
            navigate('/*')
        }
    }, [])*/

    const addUser = () => {
        if (nome === '' || titulo === '' || email === '' || sobreNome === '' || telefone === '' || data === '') return

        var repeated = false

        clients.map((c) => {
            if (c.email === email || c.telefone === telefone) {
                repeated = true
                AlertError({
                    title: 'Erro',
                    description: 'O identificador deste utilizador já existe',
                })
                return
            }
        })

        if (repeated) return

        setClients((clients) => [...clients, {
            nome: nome,
            email: email,
            titulo: titulo,
            telefone: telefone,
            data: data,
            sobrenome: sobreNome,
        }])
    }

    useEffect(() => {
        setDisable(clients.length !== url.id)
    }, [clients])

    const handleBooking = () => {
        const json = {}

        clients.map((c, i) => {
            json[`nome${i}`] = c.nome
            json[`sobrenome${i}`] = c.sobrenome
            json[`email${i}`] = c.email
            json[`titulo${i}`] = c.titulo
            json[`telefone${i}`] = c.telefone
            json[`data${i}`] = c.data
        })

        console.log(json)

        AlertSuccess({
            title: 'Sucesso',
            description: 'A compra foi concluida com sucesso',
        })
    }

    return (
        <Wrap>
            <div className='w-full min-h-screen bg-white text-black p-5'>
                <div className='w-full flex items-center mb-20'>
                    <a
                        href='/'
                        className='p-3 rounded-full cursor-pointer'
                    >
                        <img src={Logo} alt='logo' className='w-20 h-full' />
                    </a>
                    <h1 className='text-lg'>Preencha os seus dados</h1>
                </div>

                {
                    clients.length !== 0 && (
                        <TableContainer className='mb-20'>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <p className='font-bold'>
                                                Nome
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className='font-bold'>
                                                Sobrenome
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className='font-bold'>
                                                Telefone
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className='font-bold'>
                                                Nascido
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className='font-bold'>
                                                E-mail
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className='font-bold'>
                                                Remover
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        clients.map((c, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {c.nome}
                                                </TableCell>
                                                <TableCell>{c.sobrenome}</TableCell>
                                                <TableCell>{c.telefone}</TableCell>
                                                <TableCell sx={{ minWidth: 150 }}>
                                                    {c.data}
                                                </TableCell>
                                                <TableCell>{c.email}</TableCell>
                                                <TableCell>
                                                    <Tooltip title={`Remover ${c.nome}`} arrow placement='top'>
                                                        <button
                                                            className='border-none shadow-none bg-transparent'
                                                            onClick={() => {
                                                            }}
                                                        >
                                                            <MdDelete
                                                                size={20} className='cursor-pointer hover:text-red-600 duration-300'
                                                            />
                                                        </button>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                }

                <Grid item container spacing={3} justify='center'>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='flex flex-col'>
                            <span>{clients.length}/{qtd}</span>
                            <div className='flex items-center'>
                                <Switch
                                    checked={formChild}
                                    onChange={(e) => setFormChild(e.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <span>Criança</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl fullWidth variant='outlined'>
                            <InputLabel id='demo-simple-select-outlined-label'>
                                Título
                            </InputLabel>
                            <Select
                                labelId='demo-simple-select-outlined-label'
                                id='demo-simple-select-outlined'
                                label='Título'
                                name='occupation'
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            >
                                <MenuItem value='sr'>
                                    Srº
                                </MenuItem>
                                <MenuItem value='sra'>
                                    Srª
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            label='Nome'
                            variant='outlined'
                            name='nome'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            label='Sobrenome'
                            variant='outlined'
                            name='sobrenome'
                            value={sobreNome}
                            onChange={(e) => setSobreNome(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            label='Email'
                            variant='outlined'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
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
                            placeholder='(+244) 933 470 417'
                            specialLabel={''}
                            country={'ao'}
                            value={telefone}
                            onChange={(n) => setTelefone(n)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label='Data'
                                inputFormat='YYYY/MM/DD'
                                value={data}
                                onChange={(newValue) => {
                                    if(newValue === null) setData('')
                                    else setData(`${newValue.$y}-${newValue.$M > 9 ? '' : '0'}${newValue.$M + 1}-${newValue.$D > 9 ? '' : '0'}${newValue.$D}`)
                                }}
                                maxDate='2005/01/01'
                                renderInput={(params) => <TextField {...params} fullWidth sx={{
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
                    </Grid>
                    {
                        !disable && (
                            <Grid item xs={12} sm={12} md={12}>
                                <BoxButton
                                    disabled={disable}
                                    className={`${disable ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={handleBooking}
                                >
                                    Compre {`${disable ? '' : `por ${clients.length * 5000} kz`}`}
                                </BoxButton>
                            </Grid>
                        )
                    }
                </Grid>

                {
                    qtd > clients.length && (
                        <FloatingAddButton
                            title='Adicionar passageiro'
                            onClick={addUser}
                        />
                    )
                }
            </div>
        </Wrap>
    )
}

export default Booking
