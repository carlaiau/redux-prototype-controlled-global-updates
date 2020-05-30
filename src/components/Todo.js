import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import StyledButton from './StyledButton'
const Todo = ({ onClick, todo, onEdit }) => {
  const { id, label, price, brand, completed } = todo

  const [priceVisible, togglePrice] = useState(false)
  const [brandVisible, toggleBrand] = useState(false)

  const [localPrice, changePrice] = useState('')
  const [localBrand, changeBrand] = useState('')

  useEffect(() => {
    changePrice(price)
  }, [price])

  useEffect(() => {
    changeBrand(brand)
  }, [brand])

  return (
    <li style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <div style={{
        border: '1px solid ' + completed ? '#2ed573' : '#ff4757',
        padding: '2.5%',
        width: '95%',
        marginBottom: '5px',
        borderRadius: '3px',
        background: completed ? '#7bed9f' : '#ff6b81'
      }}>
        <div style={{
          display: 'flex',
          flex: 2,
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <span
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}>
            {label}
          </span>
          <div style={{ display: 'flex' }}></div>
          <StyledButton onClick={() => {
            if (brandVisible && brand != localBrand)
              onEdit(id, 'brand', localBrand)
            if (priceVisible && price != localPrice)
              onEdit(id, 'price', localPrice)

            toggleBrand(false)
            togglePrice(!priceVisible)
          }
          }>
            Price
          </StyledButton>
          <StyledButton onClick={() => {
            if (priceVisible && price != localPrice)
              onEdit(id, 'price', localPrice)
            if (brandVisible && brand != localBrand)
              onEdit(id, 'brand', localBrand)

            togglePrice(false)
            toggleBrand(!brandVisible)

          }
          }>Brand</StyledButton>
          <StyledButton onClick={onClick}>
            {completed ? 'Undo' : 'Done'}
          </StyledButton>
        </div>

        {
          priceVisible && (
            <div style={{ padding: '2.5%', margin: '5px 0' }}>
              <input type="text"
                value={localPrice}
                onChange={(e) => changePrice(e.target.value)}
              />
            </div>
          )
        }
        {
          brandVisible && (
            <div style={{ padding: '2.5%', margin: '5px 0' }}>
              <input type="text"
                value={localBrand}
                onChange={(e) => changeBrand(e.target.value)}
              />
            </div>
          )
        }
      </div>
    </li >
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    price: PropTypes.string,
    brand: PropTypes.string
  })

}

export default Todo
