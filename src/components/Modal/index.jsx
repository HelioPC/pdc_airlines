import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { IoMdClose } from 'react-icons/io'

const Modal = (props) => {

    const { title, children, maxWidth, open, handleClose } = props

    return (
        <Dialog
            open={open} fullWidth
            onClose={handleClose}
            maxWidth={maxWidth === undefined ? 'sm' : maxWidth}
        >
            <DialogTitle>
                <div className='flex justify-between items-center'>
                    <Typography variant='h6' component='div'>
                        {title}
                    </Typography>
                    
                    <Button
                        color='error'
                        onClick={ () => handleClose() }
                    >
                        <IoMdClose className='text-[#000]' size={20} />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    maxWidth: PropTypes.string,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default Modal
