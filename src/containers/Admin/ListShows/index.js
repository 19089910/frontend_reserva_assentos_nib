/** FALTA:
 * adicionar status de que o usuario ja esta em seu acento com checkin do adm lendo o qrcode
 */
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Conteiner, Img, EditIconStyles } from './styles'

function ListShows() {
  const [shows, setShows] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function loadShows() {
      try {
        const { data } = await api.get('shows')
        setShows(data)
      } catch (error) {
        console.error('Erro ao carregar os shows:', error)
      }
    }
    loadShows()
  }, [])

  function editShow(show) {
    navigate(paths.EditShow, { state: { show } })
  }

  return (
    <Conteiner>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome do Show</TableCell>
              <TableCell align="center">Poster</TableCell>
              <TableCell align="center">Banner</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="center">Datas Disponíveis</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shows &&
              shows.map((show) => (
                <TableRow
                  key={show.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {show.showName}
                  </TableCell>{' '}
                  <TableCell align="center">
                    <Img src={show.postUrl} alt="poster-do-show" />
                  </TableCell>
                  <TableCell align="center">
                    <Img src={show.bannerUrl} alt="banner-do-show" />
                  </TableCell>
                  <TableCell>{show.description}</TableCell>
                  <TableCell align="center">
                    {show.dates.length > 0
                      ? show.dates.map((date, index) => (
                          <div key={index}>
                            {new Date(date.showDateTime).toLocaleString(
                              'pt-BR',
                              {
                                dateStyle: 'short',
                                timeStyle: 'short'
                              }
                            )}
                          </div>
                        ))
                      : 'Sem datas disponíveis'}
                  </TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => editShow(show)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Conteiner>
  )
}

export default ListShows
