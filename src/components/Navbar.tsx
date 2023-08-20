import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar absolute">
        <div className="flex-1">
            <Link href='/'><Image src="/images/Logo.png" width={80} height={80} alt='Logo'/></Link>
        </div>
        <div className="flex-none mr-4">
            <button className="btn btn-primary" onClick={()=>window.sign_in.showModal()}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar