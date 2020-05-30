import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{
    fontFamily: 'courier'
  }}>
    <h2>Prototype: Redux and local states with useState and useEffect</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <div style={{ background: '#a4b0be', padding: '5px', borderRadius: '3px', marginTop: '10px' }}>
      <p>
        Global state of <strong>Price & Brand</strong> are only updated after changing a value and closing the toggle.
      </p>
      <p>
        Each toggle has a local state using useState, and uses useEffect to 'listen' for prop updates.
        This means we can map the inputs to their local state, until we deem it neccesariy to propogate the changes back to the global state.
        Then after this global state change the local states are updated to reflect the global state change.
        This means in the production app we can do the network call before pushing to global state, and then any dependent field changes get updated based on global and quickbase logic.
        I am thinking that this global update can be triggered at different times depending on the active panel. Either at close time, or after every field update via keyboard dismiss etc.
      </p>

      <p>The update functions can be made a lot DRYER and each panel will be split into it's own component
      </p>
      <p>using useEffect to listen for prop changes. Each panel will call the same global state update function in a similar fashion to how this example works.</p>
    </div>
  </div >
)

export default App
