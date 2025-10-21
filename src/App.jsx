import './App.css'
import Header from './components/header'
import FullTable from './pages/fullTable'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/league/:leagueName' element={<FullTable/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
