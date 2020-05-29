const initalToDos = [
  {
    id: 0,
    label: 'The 1st',
    completed: false,
    price: '10',
    location: 'Dunedin'
  },
  {
    id: 1,
    label: 'The 2nd',
    completed: false,
    price: '20',
    location: 'Christchurch'
  }
]

const todos = (state = initalToDos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'EDIT_TODO':
      console.log("Action is reaching reducer", action)
      return state.map(todo =>
        todo.id === action.id
          ?
          {
            ...todo,
            // Overwrites the specific key value pair that we're updating
            // Hard code this to a value to ensure that your frontend panel is not just showing the local state
            [action.key]: action.value
          }
          : todo)
    default:
      return state
  }
}

export default todos