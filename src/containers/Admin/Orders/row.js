import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

function OrdersTable({ rows }) {
  const [openRow, setOpenRow] = useState(null)

  const handleClick = (orderId) => {
    setOpenRow(openRow === orderId ? null : orderId)
  }

  return (
    <React.Fragment key={rows.orderId}>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleClick(rows.orderId)}
          >
            {openRow === rows.orderId ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {rows.userName}
        </TableCell>
        <TableCell component="th" scope="row">
          {rows.orderId}
        </TableCell>
        <TableCell>{rows.seatNumbers}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openRow === rows.orderId} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Dados do cliente:
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID do Usuario</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>Assentos</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{rows.userId}</TableCell>
                    <TableCell>{rows.userEmail}</TableCell>
                    <TableCell>{rows.seatNumbers}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

OrdersTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.string.isRequired,
      seatNumbers: PropTypes.string.isRequired,
      showDateTime: PropTypes.string.isRequired
    })
  ).isRequired
}

export default OrdersTable
