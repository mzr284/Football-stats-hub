import './App.css'
import Header from './components/header'
import FullTablePage from './pages/fullTablePage'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TeamInfo from './pages/teamInfo'
import NewsPage from './pages/newsPage'
import Footer from './components/footer'

function App() {
 
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/league/:leagueName' element={<FullTablePage/>}/>
          <Route path='/team/:teamId' element={<TeamInfo/>}/>
          <Route path='/news' element={<NewsPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
