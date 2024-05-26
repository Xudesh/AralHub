import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import {Routes, Route} from "react-router-dom"
import DetailPage from './pages/DetailPage'


function App() {
  return (
    <section className='App'>
      <Header />


      <Routes>
        <Route path='/' element={<Content />} >
          <Route path='/detail' element={<DetailPage />} />
        </Route>
      </Routes>


      <Footer />

    </section>
  )
}

export default App