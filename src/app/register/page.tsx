"use client";

import React, {useRef, useState} from 'react'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select';
import { validateInput } from '@/utils/value';

const Page = () => {

  const nameRef = useRef<HTMLInputElement>(null)
  const registerNoRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const srmEmailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const name = nameRef.current?.value.trim()
    const registerNo = registerNoRef.current?.value.trim()
    const email = emailRef.current?.value.trim()
    const srmEmail = srmEmailRef.current?.value.trim()
    const phone = phoneRef.current?.value.trim()
    const password = passwordRef.current?.value.trim()
    const confirmPassword = confirmPasswordRef.current?.value.trim()
    const domain = selectedOption

    // Perform validation


    // Send data to server

    // Clear form
    nameRef.current!.value = ''
    registerNoRef.current!.value = ''
    emailRef.current!.value = ''
    srmEmailRef.current!.value = ''
    phoneRef.current!.value = ''
    passwordRef.current!.value = ''
    confirmPasswordRef.current!.value = ''
    setSelectedOption(null)

    // Show success message
    
    // Redirect to login page
    window.location.href = '/'

  }

  return (
    <main className='px-[4vw] py-4 font-f1'>
      <h1 className='font-bold text-5xl mb-8'>Register</h1>
      <form onSubmit={submitHandler}>
        <Input ref={nameRef} label='Name' placeholder='John Doe' type='text'/>
        <Input ref={registerNoRef} label='Register Number' placeholder='RA2XXXXXXXXXXXX' type='text'/>
        <Input ref={emailRef} label='Personal Email' placeholder='xyz@gmail.com' type='email'/>
        <Input ref={srmEmailRef} label='SRM Email' placeholder='xy000@srmist.edu.in' type='email'/>
        <Input ref={phoneRef} label='Phone Number' placeholder='XXX-XXX-XXXX' type='text'/>
        <Input ref={passwordRef} label='Password' placeholder='' type='password'/>
        <Input ref={confirmPasswordRef} label='Confirm Password' placeholder='' type='password'/>
        <div className='mt-4 max-w-screen-md'>
          <label>Choose Domain</label>
          <Select style="md:grid-cols-2 gap-2 mt-2" options={['Technical', 'Corporate', 'Creatives', 'Research']} setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
          <p className="mt-4"> Selected Option: {selectedOption ? selectedOption : 'None selected'}</p>
        </div>
        <button type='submit' className="btn btn-primary mt-4 font-normal">Register</button>
      </form>
    </main>
  )
}

export default Page