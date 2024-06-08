import React from 'react'
import Navbar from './section/Navbar'
import Wrapper from './section/Wrapper'
import Footer from './section/Footer'
import Background from './components/Background'
import "./scss/index.scss";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Search from "./pages/Search"
import Compare from "./pages/Compare"
import About from "./pages/About"
import Pokemon from "./pages/Pokemon"
import MyList from "./pages/MyList"

const App = () => {
  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
            <Routes>
              <Route element={<Search />} path='/search'/>
              <Route element={<MyList />} path='/list'/>
              <Route element={<About />} path='/about'/>
              <Route element={<Compare />} path='/compare'/>
              <Route element={<Pokemon />} path='/pokemon/:id'/>
              <Route element={<Navigate to="/pokemon/1" />} path='*' />
            </Routes>
          <Footer />        
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App