import mongoose from 'mongoose';
import { IApplicant } from '@/utils/types';

const applicantSchema = new mongoose.Schema<IApplicant>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    registerNo: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: String,
    },
    dob: {
        type: String,
        required: true,
    },
    srmEmail: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    socials: {
        type: Object,
    },
    domain: {
        type: String,
        required: true,
    },
    subDomain: {
        type: String,
        required: true,
    },
    submission: {
        type: String,
    },
}, {timestamps: true,}
);

export default mongoose.models.Applicant || mongoose.model<IApplicant>('Applicant', applicantSchema);