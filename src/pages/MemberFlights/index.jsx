import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
// import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

const MemberFlights = () => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow className='bg-[#DDD]'>
							<TableCell>
								<p className='font-bold'>Número</p>
							</TableCell>
							<TableCell>
								<p className='font-bold'>Origem</p>
							</TableCell>
                            <TableCell>
								<p className='font-bold'>Chegada</p>
							</TableCell>
							<TableCell>
								<p className='font-bold'>Tipo</p>
							</TableCell>
                            <TableCell>
								<p className='font-bold'>Ações</p>
							</TableCell>
						</TableRow>
					</TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1234</TableCell>
                            <TableCell>Luanda</TableCell>
                            <TableCell>Porto</TableCell>
                            <TableCell>Ida e volta</TableCell>
                        </TableRow>
                    </TableBody>
				</Table>
			</TableContainer>
		</Paper>
    )
}

export default MemberFlights
