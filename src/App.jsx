import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Admin, Analytics, Dashbord, Home, Landing} from './pages/index'
import { useState } from 'react'
import {ProtectedRouter} from './components/ProtectedRouter'

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 1,
      name: "John",
      Permissions: ['analize'],
      roles: ['admin']
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>
      <Navigation />
      {
        user ? (
          <button onClick={logout} className='bg-indigo-500 m-1 rounded-full w-40'>Logout</button>
        ) : (
          <button onClick={login} className='bg-indigo-500 m-1 rounded-full w-40'>Login</button>
        )
      }
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route element={<ProtectedRouter isAllowed={!!user} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashbord' element={<Dashbord />} />
        </Route>
        <Route path='/analytics' element={
          <ProtectedRouter isAllowed={!!user && user.Permissions.includes('analize')} redirectTo='/home'>
            <Analytics />
          </ProtectedRouter>
        } />
        <Route path='/admin' element={
          <ProtectedRouter isAllowed={!!user && user.roles.includes('admin')} redirectTo='/home'>
            <Admin />
          </ProtectedRouter>
        } />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation(){
  return <nav className="m-5">
    <ul>
      <li>
        <Link to="landing">Landing</Link>
      </li>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="dashbord">Dashbord</Link>
      </li>
      <li>
        <Link to="analytics">Analytics</Link>
      </li>
      <li>
        <Link to="admin">Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App