import React from 'react'
import SubmitButton from './SubmitButton'

async function sendMessage(formData) {
  const name = formData.get('name')
  const message = formData.get('message')

  // Perform validation or send data to the server
  await new Promise(resolve => setTimeout(resolve, 12000)) // Simulate a delay for async operation
  console.log('Name:', name)
  console.log('Message:', message)

  return { success: true, message: `Thank you, ${name}! Your message has been sent.` }
}

function AboutForm() {
  return (
    <div>
      <h1>About Us</h1>
     
        <form action={sendMessage}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <br />
        <SubmitButton/>
      </form>
    </div>
  )
}

export default AboutForm
