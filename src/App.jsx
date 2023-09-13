
import React, {useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import LoginForm from './SCREENS/login'
import { AuthContext, AuthProvider } from './contexts/AuthContext'

const Main = () => {
  const auth = useContext(AuthContext)
  return (
    <>
      {auth.isLoggedIn ? (
        <>
          <Routes>
          <Route path='/' element={<homePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path='/' element={<LoginForm />} />
        </Routes>
      )
      }
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  )
}

export { useContext }
export default App
