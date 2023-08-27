import { IApplicant } from '@/utils/types';

export const registerApplicant = async (data: IApplicant) => {
  const response = await fetch(`/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const getApplicant = async (email: string) => {
  try{
    const response = await fetch(`/api/register?email=${email}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if(!response.ok) throw new Error('Error fetching applicant')
    const data = await response.json();
    return data;
  }
  catch(err){
    console.log(err)
  }
};