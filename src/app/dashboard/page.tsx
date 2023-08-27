"use client";

import React, { Key, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { getApplicant } from '@/utils/API';
import Navbar from '@/components/Navbar';
import { IApplicant } from '@/utils/types';
import Input from '@/components/ui/Input';

const Page = () => {
    const {data: session} = useSession();
    const srmEmail = session?.user?.email as string | undefined;
    const [applicant, setApplicant] = React.useState<IApplicant | null>(null);
    const [tasks, setTasks] = React.useState<string[]>([]);
    const submissionRef = React.useRef<HTMLInputElement>(null);
    // Fetch Applicant info from DB
    useEffect(() => {
        if (srmEmail) {
            getApplicant(srmEmail).then((applicant) => {
                setTasks(applicant.data.tasks);
                setApplicant(applicant.data._doc);
            })
        }
    }, [srmEmail])

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submission = submissionRef.current?.value;        
    }

    return (
        <>
            <Navbar />
            <div className="hero pt-32 xs:pt-0 justify-start px-[4vw] min-h-screen bg-base-200">
                <div className='max-w-4xl'>
                    <h1 className='text-2xl font-f1 mb-4'>Hello, {applicant?.name}</h1>
                    <h2 className='text-xs font-f1 text-secondary'>Your Tasks ({applicant?.subDomain})</h2>
                    {tasks.map((task: string, index: Key) => <p className='text-md md:text-xl' key={index}>{task}</p>)}
                    <strong className='mt-4'>*Note</strong>
                    <form onSubmit={submitHandler}>
                        <Input ref={submissionRef} type='url' label={`Upload your ${applicant?.domain === "Technical" ? "GitHub" : "Drive"} link here`} placeholder="https://" />
                        <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page