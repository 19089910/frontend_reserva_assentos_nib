import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMensageStyles } from './styles'

export function ErrorMensage({ children }) {
  return <ErrorMensageStyles>{children}</ErrorMensageStyles>
}
ErrorMensage.propTypes = { children: PropTypes.string }
