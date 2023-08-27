"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Clock from "@/components/ui/Clock";
import {signIn, signOut, useSession} from "next-auth/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-4 max-w-none text-center">
          <h1 className="text-6xl font-bold font-f1">Recruitments 2K23</h1>
          <Clock />
          <button className="btn btn-wide glass btn-primary" onClick={() => signIn("google", { callbackUrl: '/register' })}>Register</button>
        </div>
      </div>
    </>
  );
}
