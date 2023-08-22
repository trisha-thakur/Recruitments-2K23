"use client";

import React, {useRef} from 'react'
import Input from '@/components/ui/Input'
import { validateInput } from '@/utils/value';


const Page = () => {

  const nameRef = useRef<HTMLInputElement>(null)
  const registerNoRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const srmEmailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const name = nameRef.current?.value.trim()
    const registerNo = registerNoRef.current?.value.trim()
    const email = emailRef.current?.value.trim()
    const srmEmail = srmEmailRef.current?.value.trim()
    const phone = phoneRef.current?.value.trim()
    const password = passwordRef.current?.value.trim()
    const confirmPassword = confirmPasswordRef.current?.value.trim()

    if (!validateInput(name, 'name')) {
      nameRef.current?.focus()
      return
    }
  }

  return (
    <main className='p-4'>
      <h1 className='font-f1 font-bold text-5xl'>Register</h1>
      <form onSubmit={submitHandler}>
        <Input ref={nameRef} label='Name' placeholder='Type Here...' type='text'/>
        <Input ref={registerNoRef} label='Register Number' placeholder='Type Here...' type='text'/>
        <Input ref={emailRef} label='Personal Email' placeholder='Type Here...' type='email'/>
        <Input ref={srmEmailRef} label='SRM Email' placeholder='Type Here...' type='email'/>
        <Input ref={phoneRef} label='Phone Number' placeholder='Type Here...' type='text'/>
        <Input ref={passwordRef} label='Password' placeholder='Type Here...' type='password'/>
        <Input ref={confirmPasswordRef} label='Confirm Password' placeholder='Type Here...' type='password'/>
        <button type='submit' className="btn btn-primary mt-4 font-normal">Register</button>
      </form>
    </main>
  )
}

export default Page