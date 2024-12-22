/**
 * TA CHEIO DE REDUNDANCIAS PORQUE NO FUTURO VOU ADD STATUS DE CHECKIN
 */

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import {
  groupByDate,
  formatDate,
  formatWeekDay,
  formatTime
} from '../../../util/formatDateGrup'
import api from './../../../services/api'
import Row from './row'
import { Conteiner, Menu, LinkMenu } from './styles'

function Orders() {
  const [orders, setOrders] = useState([]) // Todos os pedidos
  const [filteredOrders, setFilteredOrders] = useState([]) // Pedidos filtrados pelo menu
  const [activeTime, setActiveTime] = useState(null) // Tempo ativo no menu
  const [rows, setRows] = useState([])
  const [dates, setDates] = useState([]) // Datas disponíveis para shows
  const [time, setTime] = useState({}) // Horários agrupados por data

  // Carregar shows e agrupar por data e hora
  useEffect(() => {
    async function loadShows() {
      const { data } = await api.get('/shows')
      const groupedShows = groupByDate(data[0].dates) // Considerando apenas o primeiro show para este exemplo
      setTime(groupedShows)
      setDates(Object.keys(groupedShows))
    }
    loadShows()
  }, [])

  // Carregar pedidos
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('/seats')
      setOrders(data) // Lista completa de pedidos
      setFilteredOrders(data) // Cópia inicial para filtro
    }
    loadOrders()
  }, [])

  // table model
  function createData(order) {
    return {
      userId: order.user.id,
      userName: order.user.name,
      seatNumbers: order.seatNumber.join(', '), // Converte os assentos para uma string separada por vírgulas
      orderId: order._id
    }
  }

  // Atualizar as linhas da tabela ao filtrar pedidos
  useEffect(() => {
    const newRows = filteredOrders.map((ord) => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  // Filtrar pedidos por horário selecionado
  function filterOrdersByTime(selectedTime) {
    if (!selectedTime) {
      return orders
    }
    return orders.filter((order) => order.showDateTime === selectedTime)
  }

  // Manipular seleção de horário
  function handleTimeSelection(selectedTime) {
    const newFilteredOrders = filterOrdersByTime(selectedTime)
    setFilteredOrders(newFilteredOrders)
    setActiveTime(selectedTime)
  }

  // Atualizar automaticamente os pedidos filtrados quando a lista de pedidos mudar
  useEffect(() => {
    const newFilteredOrders = filterOrdersByTime(activeTime)
    setFilteredOrders(newFilteredOrders)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders])

  // Definir o primeiro horário disponível como inicial
  useEffect(() => {
    if (dates.length > 0 && !activeTime) {
      const firstDate = dates[0] // Pega a primeira data disponível
      const firstTime = time[firstDate]?.[0] // Pega o primeiro horário disponível para essa data
      if (firstTime) {
        handleTimeSelection(firstTime) // Seleciona automaticamente o primeiro horário
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates, time])

  return (
    <Conteiner>
      <Menu>
        {dates.map((date) =>
          time[date]?.map((timeOption) => (
            <LinkMenu
              key={`${date}-${timeOption}`}
              onClick={() => handleTimeSelection(timeOption)}
              isActiveStatus={activeTime === timeOption}
            >
              {formatWeekDay(date)}
              <br />
              {formatDate(date)} - {formatTime(timeOption)}
            </LinkMenu>
          ))
        )}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                rows={row}
                // setOrders={setOrders}
                // orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  )
}

export default Orders
