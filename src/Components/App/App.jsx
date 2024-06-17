import { Provider } from 'jotai/react'
import Header from '../Header/Header'
import AppRoutes from '../Routes/Routes'
import './App.css'

function App() {
  

  return (
  <Provider>
    <div className="container">
      <Header/>
      <AppRoutes/>
    </div>
  </Provider>
  )
}

export default App
