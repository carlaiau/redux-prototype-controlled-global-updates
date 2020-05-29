import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, editTodo }) => (
  <ul style={{ padding: 0 }}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        todo={todo}
        onClick={() => toggleTodo(todo.id)}
        onEdit={(id, key, value) => editTodo(id, key, value)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoList
