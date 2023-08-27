"use client";

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { getApplicant } from '@/utils/API';
import Navbar from '@/components/Navbar';
import { IApplicant } from '@/utils/types';

const Page = () => {
    const {data: session} = useSession();
    const srmEmail = session?.user?.email as string | undefined;
    const [applicant, setApplicant] = React.useState<IApplicant | null>(null);
    // Fetch Applicant info from DB
    useEffect(() => {
        if (srmEmail) {
            getApplicant(srmEmail).then((applicant) => {
                setApplicant(applicant.data);
            })
        }
    }, [srmEmail])

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-base-200">
                <h1 className='text-'>Hello {applicant?.name}</h1>
                <h2>Your Tasks ({applicant?.subDomain})</h2>
                <p></p>
            </div>
        </>
    )

}

export default Page