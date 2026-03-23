import React, { useActionState } from 'react'

async function handleSubmit( formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Perform validation or send data to the server
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)

    return { success: true, message: `Hello, ${name}! Form submitted successfully.` }
}

function ContactForm() {
  const [state,action] = useActionState(handleSubmit,null)
  console.log(state)
  return (

    //use state and action to handle form submission and
    //  display success or error messages based on the result of the handleSubmit function.
    <div>
      <h1>Contact Us</h1>
      <form action={action}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type='submit'>Submit</button>
      </form>
      {state && (
        <div>
          {state.success ? (
            <p style={{ color: 'green' }}>{state.message}</p>
          ) : (
            <p style={{ color: 'red' }}>{state.message}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default ContactForm
