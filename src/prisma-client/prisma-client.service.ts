import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { skip } from 'node:test';
import { JobProfileData, ReturnJobProfileData } from 'src/job-profile/job-profile-data';

@Injectable()
export class PrismaClientService {
    private prismaClient = new PrismaClient()
    constructor(){
        (async () => {
            await this.prismaClient.$connect()
        })() 
    }

    async createJobProfile(jobProfile: JobProfileData) : Promise<ReturnJobProfileData>{
        try {
            const newJobProfile =  await this.prismaClient.jobProfile.create({
                data: {
                    "jobTitle":    jobProfile.jobTitle ?? "Engineer",
                    "jobType":    jobProfile.jobType ?? "Full-time",
                    "jobLocation": jobProfile.location ?? "Chennai",
                    "jobDescription": jobProfile.jobDescription ?? "This is a job",
                    "jobCompany":  jobProfile.companyName ?? "Microsoft",
                    "jobSalary":   jobProfile.salaryRange ?[Number(jobProfile.salaryRange[0]), Number(jobProfile.salaryRange[1])] : [10000, 100000],
                    "jobRequirements": jobProfile.jobRequirements ?? "C++ C Communication",
                    "jobResponsibilities": jobProfile.jobResponsibilities ?? "Product Manager",
                }
            })
            
            console.log(newJobProfile)
            return newJobProfile
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async getJobProfiles(page: number, limit: number, filter) : Promise<ReturnJobProfileData[]>{
     
        const from = (page - 1) * limit
        if(filter.salaryRange != null || filter.salaryRange != undefined){
            console.log(filter.salaryRange)
        }
        try{
            let jobProfiles : ReturnJobProfileData[] = await this.prismaClient.jobProfile.findMany({
                where: {
                    ...(filter.jobTitle && { OR: filter.jobTitle.split(' ').map((word: string) => ({
                        jobTitle: {
                          contains: word,
                          mode: "insensitive", // Case-insensitive match for each word
                        },
                      })),}),
                    ...(filter.jobLocation && {jobLocation: {contains: filter.jobLocation, mode:'insensitive'}}),
                    ...(filter.jobType && {jobType: filter.jobType}),
                },
                skip: from ?? 0,
                take: limit ?? 1,
            })

            if(filter.salaryRange && filter.salaryRange.length === 2){
                jobProfiles = jobProfiles.filter(jobProfile => {
                    const [min, max] = filter.salaryRange
                    return !(jobProfile.jobSalary[1] < min || jobProfile.jobSalary[0] > max)
                })
            }

            console.log("Returing job profiles", jobProfiles)
            return jobProfiles
        } catch (error) {
            console.log(error)
            return null
        }
    }

 

    async deleteProfiles() {
        this.prismaClient.jobProfile.deleteMany()
    }
}
