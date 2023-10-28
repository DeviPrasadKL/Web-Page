import './App.css'
import Content from './Components/Content'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div style={{display:'flex'}}>
      <Dashboard/>
      <Content/>
      </div>
    </>
  )
}

export default App
