import PropTypes from 'prop-types'
import React from 'react'

import { UserProvider } from './authProvider'
import { SeatProvider } from './SeatContext'

const AppProvider = ({ children }) => (
  <SeatProvider>
    <UserProvider>{children}</UserProvider>
  </SeatProvider>
)

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.node
}
