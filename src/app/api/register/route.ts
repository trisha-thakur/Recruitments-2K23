import {NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Applicant from '@/backend/models/Applicant';

import {tasks} from '@/backend/data';
import { ITask } from '@/utils/types';

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  try{
    const email = req.url?.split('?')[1].split('=')[1];
    const user = await Applicant.findOne({srmEmail: email});
    const subDomain: keyof ITask= user.subDomain;
    let yearofStudy: keyof ITask[string];
    switch(user.registerNo.slice(2,4)){
      case '23':
        yearofStudy = 'Ist';
        break;
      case '22':
        yearofStudy = 'IInd';
        break;
      case '21':
        yearofStudy = 'IIIrd';
        break;
      default:
        yearofStudy = "";
    }
    // Get task as per subDomain and yearofStudy
    const task: string | Array<string> = tasks[subDomain][yearofStudy];
    return NextResponse.json({ data: {...user, task}, message: "User found", success: true });
  }
  catch(error){
    return NextResponse.json({ data: null, message: "User not found", success: false });
  }
};

export const POST = async (req: Request, res: Response) => {
  await dbConnect();
  const data = await req.json();
  try {
    const user = await Applicant.create(data);
    return NextResponse.json({ message: "Application created", success: true });
  } catch (error) {
    return NextResponse.json({ message: "Application failed", success: false });
  }
};