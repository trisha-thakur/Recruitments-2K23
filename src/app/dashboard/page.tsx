"use client";

import React, { Key, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { getApplicant } from '@/utils/API';
import Navbar from '@/components/Navbar';
import { IApplicant } from '@/utils/types';
import { submitTask } from '@/utils/API';
import Input from '@/components/ui/Input';

const Page = () => {
    const {data: session, status} = useSession();
    const srmEmail = session?.user?.email as string | undefined;
    const [applicant, setApplicant] = React.useState<IApplicant | null>(null);
    const [tasks, setTasks] = React.useState<string[]>([]);
    const submissionRef = React.useRef<HTMLInputElement>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    // Fetch Applicant info from DB
    useEffect(() => {
        setLoading(true);
        if (srmEmail) {
            getApplicant(srmEmail).then((applicant) => {
                setTasks(applicant.data.tasks);
                setApplicant(applicant.data._doc);
                setLoading(false);
            })
        }
    }, [srmEmail])

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submission = submissionRef.current?.value.trim(); 
        let data;
        if (submission !== '' && submission !== undefined && submission !== null) {
            submitTask(srmEmail as string, submission).then((res) => {
                if(res.success) window.location.href = '/thankyou';
            })
        }
    }

    return (
        <>
            <Navbar />{
                loading || status==="loading" ? (<div className='hero min-h-screen bg-base-200'><span className="loading loading-spinner loading-sm"></span></div>) :
            
            <div className="hero pt-32 xs:pt-0 justify-start px-[4vw] min-h-screen bg-base-200">
                <div className='max-w-4xl'>
                    <h1 className='text-2xl font-f1 mb-4'>Hello, {applicant?.name}</h1>
                    <h2 className='text-xs font-f1 text-secondary'>Your Tasks ({applicant?.subDomain})</h2>
                    <ul className=' list-inside list-decimal my-4'>
                    {tasks.map((task: string, index: Key) => <li className='text-md md:text-xl mb-2' key={index}>{task}</li>)}
                    </ul>
                    <strong className='mt-4'>{
                        applicant?.domain === "Technical" ? "*Please submit your files through a GitHub repository" : "*Upload your PDF/JPEG Files by generating a shareable Drive link with appropriate access permissions" }</strong>
                    <form onSubmit={submitHandler}>
                        <Input ref={submissionRef} type='url' label={`Upload your ${applicant?.domain === "Technical" ? "GitHub" : "Drive"} link here`} placeholder="https://" />
                        <button type="submit" className='btn btn-primary mt-2'>Submit</button>
                    </form>
                </div>
            </div>
            }
        </>
    )
}

export default Page