"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Clock from "@/components/ui/Clock";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-4 max-w-none text-center">
          <h1 className="text-6xl font-bold font-f1">Recruitments 2K23</h1>
          <div className="pt-10">
            <Clock />
          </div>
          <Link href="/register" className="btn btn-wide glass btn-primary">Register</Link>
        </div>
      </div>
    </>
  );
}
