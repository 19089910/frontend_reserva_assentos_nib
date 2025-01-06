/** FALTA:
 * components/Header menu bar do usurio e trasparente na tela de adm
 */

import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import paths from '../../constants/paths'
import EditShow from './EditShow'
import ListShows from './ListShows'
import NewShow from './NewShow'
import Orders from './Orders'
import { Conteiner, ConteinerItems } from './styles'

export function Admin() {
  const { pathname } = useLocation() // Captura a localização atual (rota)
  return (
    <Conteiner>
      <SideMenuAdmin />
      <ConteinerItems>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Shows && <ListShows />}
        {pathname === paths.NewShow && <NewShow />}
        {pathname === paths.EditShow && <EditShow />}
      </ConteinerItems>
    </Conteiner>
  )
}
