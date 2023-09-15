
import React, {useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './SCREENS/login'
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { Dashboard } from './PAGES/DASHBOARD'

const Main = () => {
  const auth = useContext(AuthContext)
  return (
    <>
      {auth.isLoggedIn ? (
        <>
          <Routes>
          <Route path='/' element={<homePage />} />
          <Route path='/topReview' element={<Dashboard />} />
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
