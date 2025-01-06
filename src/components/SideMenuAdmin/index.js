import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import { useLocation } from 'react-router-dom'

// import { useUser } from '../../hooks/UserContext'
import { useUser } from '../../hooks/authProvider'
import listLinks from './menu-list'
import { Conteiner, ItemConteiner, ListLink } from './styles'
export function SideMenuAdmin() {
  const { logout } = useUser()
  const { pathname } = useLocation()
  const handleLogout = (e) => {
    e.preventDefault() // Previna o comportamento padrão do link
    logout() // Chame a função logout
  }
  return (
    <Conteiner>
      <hr />
      {listLinks.map((item) => (
        <ItemConteiner key={item.id} isActive={pathname === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemConteiner>
      ))}
      <hr />
      <ItemConteiner style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffff' }} />
        <ListLink onClick={handleLogout} to="/signin">
          Sair
        </ListLink>
      </ItemConteiner>
    </Conteiner>
  )
}
