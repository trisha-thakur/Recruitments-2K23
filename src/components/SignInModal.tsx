import React from 'react'
import Modal from './ui/Modal'
import Input from './ui/Input'

const SignInModal = () => {

  const usernameRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
    if (username && password) window.sign_in.close()
  }

  return (
    <Modal id="sign_in" close={() => window.sign_in.close()} style="glass">
      <h1 className='text-3xl font-f1 font-bold mb-8'>Sign In</h1>
      <form className='font-f1 font-normal' onSubmit={submitHandler}>
        <Input ref={usernameRef} label='Username' type='text' placeholder='Type Here...'/>
        <Input ref={passwordRef} label='Password' type='password'/>
        <button type='submit' className="btn btn-primary mt-4 font-normal">Login</button>
      </form>
    </Modal>
  )
}

export default SignInModal