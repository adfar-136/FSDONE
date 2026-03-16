import React from 'react'
import { useLoaderData } from 'react-router-dom';

export async function userLoader() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

function UsersPage() {
    const users = useLoaderData()
    console.log(users)
  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
