"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Clock from "@/components/ui/Clock";
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { getApplicant } from "@/utils/API";


export default function Home() {
  const {data: session} = useSession();
  useEffect(() => {
    if(session) {
      if (session.user?.email) {
        getApplicant(session.user.email).then((applicant) => {
          if(applicant.data) {
            window.location.href = '/dashboard';
          }
          else window.location.href = '/register';
        })
    }}
  }, [session])

  return (
    <>
      <div className="hero min-h-screen bg-base-200 bg-[url('/images/android.png')] bg-fixed md:bg-fixed md:bg-[url('/images/landing.png')]">
        <div className="hero-content flex-col gap-4 max-w-none text-center">
          <Link href='/'><Image src="/images/Logo.png" width={80} height={80} alt='Logo'/></Link>
          <h1 className="text-xl md:text-6xl font-bold font-f1 pb-20 ">Recruitments 2K23</h1>
          <Clock />
          <button className="btn btn-wide glass btn-primary hover:bg-red-900" onClick={() => signIn("google", { callbackUrl: '/register' })}>Register</button>
          <a className="text-secondary cursor-pointer text-white font-bold" onClick={()=>signIn("google")}>Already Registered ? Check your Task</a>
        </div>
      </div>
    </>
  );
}
