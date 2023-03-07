import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import { CharacterProvider } from './context/CharacterContext'
import Characters from './pages/Characters'
import CharacterDetails from './components/CharacterDetails'

const App = () => {
  return (
    <BrowserRouter>
      <CharacterProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/:url' element={<CharacterDetails />} />
        </Routes>
      </CharacterProvider>
    </BrowserRouter>
  )
}

export default App