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

import api from '../../../services/api'
import status from './order-status'
import { ProductsImg, ReactSelectStyle } from './styles'

function Row({ row, orders, setOrders }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState(
    status.find((option) => option.value === row.status) || null
  )

  async function setNewStatus(id, newStatus) {
    setIsLoading(true)
    try {
      await api.put(`orders/${id}`, { status: newStatus })
      // Updates the status locally to reflect the change
      setSelectedStatus(status.find((option) => option.value === newStatus))
      // update newStatus locally in setOrders in front end
      const newOrders = orders.map((order) => {
        //  will compare and look for the id of the status that was changed among the order statuses
        return order._id === id ? { ...order, status: newStatus } : order
      })
      setOrders(newOrders)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>

        <TableCell>
          <ReactSelectStyle
            options={status}
            placeholder="status"
            menuPortalTarget={document.body}
            value={selectedStatus} // subsisted defaultInputValue
            isSearchable={false}
            isLoading={isLoading}
            onChange={(newStatus) => setNewStatus(row.orderId, newStatus.value)} // mudança para o back
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.product.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>
                        <ProductsImg
                          src={productRow.url}
                          alt="imagem-do-produto"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default Row

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,

    product: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
}
