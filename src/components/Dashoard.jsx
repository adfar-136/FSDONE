import React, { use } from 'react'
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { isLoggedIn, logout } from '../auth';

export async function dashboardLoader() {
  if (!isLoggedIn()) {
    return redirect('/login');
  }
  return { username: 'test@gmail.com' };
}

function Dashoard() {
    const navigate = useNavigate()
    const { username } = useLoaderData()
    const handleLogout = () => {
        logout()
        navigate('/login')
    }   
  return (
    <div>
      <h2>Dashoard</h2>
      <p>Login is Successful.</p>
      <p>Welcome {username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashoard
