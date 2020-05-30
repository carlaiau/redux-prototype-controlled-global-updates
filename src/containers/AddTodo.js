import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import StyledButton from '../components/StyledButton'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <StyledButton type="submit" style={{ marginLeft: '5px' }}>
          Add Item
        </StyledButton>
      </form>
    </div>
  )
}


export default connect()(AddTodo)
