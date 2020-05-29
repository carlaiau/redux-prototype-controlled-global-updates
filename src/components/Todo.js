import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, todo, onEdit }) => {
  const { id, label, price, location, completed } = todo

  const [priceVisible, togglePrice] = useState(false)
  const [locationVisible, toggleLocation] = useState(false)

  const [localPrice, changePrice] = useState(price)
  const [localLocation, changeLocation] = useState(location)

  return (
    <li style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      <div style={{
        border: '1px solid #333',
        padding: '5px',
        width: '500px',
        marginBottom: '5px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <span
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}>
            {label}
          </span>

          <button onClick={() => {
            if (locationVisible && location != localLocation)
              onEdit(id, 'location', localLocation)

            if (priceVisible && price != localPrice)
              onEdit(id, 'price', localPrice)

            toggleLocation(false)
            togglePrice(!priceVisible)
          }
          }>
            Price
          </button>
          <button onClick={() => {
            if (priceVisible && price != localPrice)
              onEdit(id, 'price', localPrice)

            if (locationVisible && location != localLocation)
              onEdit(id, 'location', localLocation)

            togglePrice(false)
            toggleLocation(!locationVisible)

          }
          }>Location</button>
          <button onClick={onClick}>
            {completed ? 'Undo' : 'Done'}
          </button>
        </div>
        <p>These are the globals
        Price: {price} | location: {location}
        </p>
        {
          priceVisible && (
            <div style={{ background: '#aa0000', height: '100px', padding: '10px', width: '480px', margin: '5px 0' }}>
              <p>You must close the toggle to actually update the global state</p>
              <input type="text"
                value={localPrice}
                onChange={(e) => changePrice(e.target.value)}
              />
            </div>
          )
        }
        {
          locationVisible && (
            <div style={{ background: '#00aa00', height: '100px', padding: '10px', width: '480px', margin: '5px 0' }}>
              <p>You must close the toggle to actually update the global state</p>
              <input type="text"
                value={localLocation}
                onChange={(e) => changeLocation(e.target.value)}
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
    location: PropTypes.string
  })

}

export default Todo
