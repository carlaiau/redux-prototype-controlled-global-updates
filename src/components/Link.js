import React from 'react'
import PropTypes from 'prop-types'

import StyledButton from '../components/StyledButton'
const Link = ({ active, children, onClick }) => (
  <StyledButton
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </StyledButton>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
