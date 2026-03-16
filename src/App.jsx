import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Counter from './Counter'
import JokeGenerator from './components/JokeGenerator'
import UsersPage, { userLoader } from './components/UsersPage'
import LoginPage, { loginAction } from './components/LoginPage'
import Dashoard, { dashboardLoader } from './components/Dashoard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/joke',
    element: <JokeGenerator/>
  },
  {
    path:"/users",
    element: <UsersPage/>,
    loader:userLoader
  },
  {
    path:"/login",
    element: <LoginPage/>,
    action: loginAction
  },
  {
    path:"/dashboard",
    element: <Dashoard/>,
    loader: dashboardLoader
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
