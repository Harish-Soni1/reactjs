import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <h1 className='text-3xl'>My Todos</h1>
      < AddTodo />
      < Todos />
    </Provider>
  )
}

export default App
