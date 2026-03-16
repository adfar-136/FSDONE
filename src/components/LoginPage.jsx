import React from 'react'
import { redirect, useActionData, Form } from 'react-router-dom'
import { login } from '../auth'

export async function loginAction({ request }) {
     const formData = await request.formData()
     const email = formData.get('email')
     const password = formData.get('password')
     if(!email || !password) {
        return { error: 'Email and password are required' }
     }
     // Simulate login logic
     if(email === 'user@example.com' && password === 'password') {
        login()
        return redirect('/dashboard')
     }
     return { error: 'Invalid email or password' }
}


function LoginPage() {
    const actionData = useActionData()
    
  return (
    <div>
      <h1>Login</h1>
       {actionData?.error && <p style={{color:'red'}}>{actionData.error}</p>}
        <Form method="post">
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br/>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br/>
            <button type="submit">Login</button>
        </Form>
    </div>
  )
}

export default LoginPage

















// import React from 'react'

// function LoginPage() {
//     const [email, setEmail] = React.useState('')
//     const [password, setPassword] = React.useState('')
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('Email:', email)
//         console.log('Password:', password)
//     }
//   return (
//     <div>
      
//         <form onSubmit={handleSubmit}>  
//             <label>
//                 Email:
//                 <input type="email" name="email" value={email} 
//                 onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" name="password" value={password} 
//                 onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <button type="submit">Login</button>
//         </form>
//     </div>
//   )
// }

// export default LoginPage
