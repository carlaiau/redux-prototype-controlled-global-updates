let nextTodoId = 2
export const addTodo = label => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  label
})

// This is the function that is dispatched and called when there are actual changes to the data on the panels
export const editTodo = (id, key, value) => ({
  type: 'EDIT_TODO',
  id,
  key,
  value
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}