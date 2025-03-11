import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
// import { AuthProvider } from './Context/AuthContext/AuthContext'

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App
