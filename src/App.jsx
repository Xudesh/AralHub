import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import {Routes, Route} from "react-router-dom"
import DetailPage from './pages/DetailPage'
import Form from './components/Form'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


function App() {
  return (
    <section className='App'>
      <Header />

      <Routes>
        <Route index element={<Content />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/form' element={<Form />} />        
        <Route path='/sign_in' element={<SignIn />} />    
        <Route path='/sign_up' element={<SignUp />} />        
      </Routes>

      <Footer />

    </section>
  )
}

export default App