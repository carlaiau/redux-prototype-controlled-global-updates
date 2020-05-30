import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, editTodo }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <ul style={{ padding: 0, width: '48%' }}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onClick={() => toggleTodo(todo.id)}
          onEdit={(id, key, value) => editTodo(id, key, value)}
        />
      )}
    </ul>
    <div style={{ width: '50%' }}>

      <pre style={{ background: '#f1f2f6', padding: '10px', borderRadius: '3px' }}>
        Global State Dump (Post filtering)<br />
        {JSON.stringify(todos, null, 2)}
      </pre>
    </div>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    price: PropTypes.string,
    brand: PropTypes.string
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoList
