"use client";

import React, {useEffect, useRef, useState} from 'react'
import { useSession } from 'next-auth/react'

import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select';
import { useToast } from '@/context/UiContext';
import { registerApplicant } from '@/utils/API';
import { IApplicant } from '@/utils/types';

const Page = () => {

  const { data: session } = useSession()
  const toast = useToast();

  const names = session?.user?.name?.split(' ');
  const name = names ? names[0] + ' ' + names[1] : '';
  const registerNo = session?.user?.name?.split('(')[1]?.split(')')[0] || '';
  const srmEmail = session?.user?.email as string | undefined;

  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLTextAreaElement>(null)
  const dobRef = useRef<HTMLInputElement>(null)
  const instagramRef = useRef<HTMLInputElement>(null)
  const linkedInRef = useRef<HTMLInputElement>(null)
  const twitterRef = useRef<HTMLInputElement>(null)
  const githubRef = useRef<HTMLInputElement>(null)

  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [subDomainOptions, setSubDomainOptions] = useState<string[] | null>(null);
  const [selectSubDomain, setSelectSubDomain] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if(selectedDomain === 'Technical') {
      setSubDomainOptions((prevState) => prevState = ["AI/ML", "Web Dev", "App Dev"]);
    } else if(selectedDomain === 'Corporate') {
      setSubDomainOptions((prevState) => prevState = ["Content", "Event Management", "Public Relations", "Sponsorship"]);
    } else if(selectedDomain === 'Creatives') {
      setSubDomainOptions((prevState) => prevState = ["UI/UX", "VFX/GFX", "Photography"]);
    } else if(selectedDomain === 'Research') {
      setSubDomainOptions((prevState) => prevState = ["R&D"]);
    }
    else {
      setSubDomainOptions((prevState) => prevState = []);
    }
  }, [selectedDomain])

  const submitHandler = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault()
    const data: IApplicant = {
      name: name as string,
      registerNo: registerNo as string,
      email: emailRef.current?.value.trim() as string,
      srmEmail: srmEmail as string,
      phone: phoneRef.current?.value.trim() as string,
      address: addressRef.current?.value.trim() as string,
      dob: dobRef.current?.value as string,
      socials: {
        instagram: instagramRef.current?.value.trim() as string,
        linkedin: linkedInRef.current?.value.trim() as string,
        twitter: twitterRef.current?.value.trim() as string,
        github: githubRef.current?.value.trim() as string,
      },
      domain: selectedDomain as string,
      subDomain: selectSubDomain as string,
    }

    // Send data to server
    const response = await registerApplicant(data);
    if(response.success) window.location.href = window.location.origin + '/dashboard'
    else toast(response.message, 'error')
  }

  return (
    <main className='px-[4vw] py-4 font-f1'>
      <h1 className='font-bold text-5xl mb-8'>Register</h1>
      <form onSubmit={submitHandler}>
        <Input label='Name' type='text' value={name} />
        <Input label='Register Number' type='text' value={registerNo}/>
        <Input ref={emailRef} label='Personal Email' type='email'/>
        <Input label='SRM Email' type='email' value={srmEmail}/>
        <Input ref={phoneRef} label='Phone Number' type='text'/>
        <div className='mt-4'>
          <label className='block mb-2 text-neutral'>Address</label>
          <textarea ref={addressRef} className="textarea resize-none outline-none border-white"></textarea>
        </div>
        <Input ref={dobRef} label='Date of Birth' type='date'/>
        <Input ref={instagramRef} label='Instagram Handle (optional)' type='text'/>
        <Input ref={linkedInRef} label='LinkedIn Profile (optional)' type='text'/>
        <Input ref={twitterRef} label='Twitter Handle (optional)' type='text'/>
        <Input ref={githubRef} label='Github Profile (optional)' type='text'/>
        <div className='mt-4 max-w-screen-md'>
          <label className='text-neutral'>Choose Domain</label>
          <Select style="md:grid-cols-2 gap-2 mt-2" options={['Technical', 'Corporate', 'Creatives', 'Research']} setSelectedOption={setSelectedDomain} selectedOption={selectedDomain} />
          <p className="mt-4"> Selected Option: {selectedDomain ? selectedDomain : 'None selected'}</p>
        </div>
        {
          selectedDomain && (
            <div className='mt-4 max-w-screen-md'>
              <label className='text-neutral'>Choose Sub Domain</label>
              <Select style="md:grid-cols-2 gap-2 mt-2" options={subDomainOptions!} setSelectedOption={setSelectSubDomain} selectedOption={selectSubDomain} />
              <p className="mt-4"> Selected Option: {selectSubDomain ? selectSubDomain : 'None selected'}</p>
            </div>
          )
        }
        <button type='submit' className="btn btn-primary mt-4 font-normal">{loading ? <span className="loading loading-spinner loading-sm"></span> : "Register"}</button>
      </form>
    </main>
  )
}

export default Page