"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import Modal from './ui/Modal'

const NavActions = () => {
  const { data: session, status } = useSession();
  if(status === "authenticated") return (
    <>
      <button className="btn btn-primary mr-4" onClick={() => signOut({callbackUrl: window.location.origin})}>Sign Out</button>
      <div className="avatar">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <Image src={session.user?.image as string} width={50} height={50} alt='Profile' />
        </div>
      </div>
    </>
  )
  else if(status === "loading") return (
    <Modal id="loading" close={() => window.loading.close()} style="glass">
      <span className="loading loading-infinity loading-lg"></span>
    </Modal>
  )
  else return <button className="btn btn-primary" onClick={() => signIn()}>Sign In</button>;
}

const Navbar = () => {
  return (
    <div className="navbar absolute">
        <div className="flex-1">
            <Link href='/'><Image src="/images/Logo.png" width={80} height={80} alt='Logo'/></Link>
        </div>
        <div className="flex-none mr-4">          
          <NavActions />
        </div>
    </div>
  )
}

export default Navbar