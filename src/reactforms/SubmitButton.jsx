import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const {pending}  = useFormStatus()
  return (
    <div>
      <button type='submit' disabled={pending}> {pending? "Sending...": "Submit"}</button>
    </div>
  )
}

export default SubmitButton
