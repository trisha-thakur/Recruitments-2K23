"use client";
import Navbar from "@/components/Navbar";
import SignInModal from "@/components/SignInModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <SignInModal />
        <div className="hero-content flex-col gap-4 max-w-none text-center">
            <h1 className="text-6xl font-bold font-f1">Recruitments 2K23</h1>
            <button className="btn btn-wide glass btn-primary">Register</button>
        </div>
      </div>
    </>
  )
}
