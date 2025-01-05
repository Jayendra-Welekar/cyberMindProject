import { Injectable } from '@nestjs/common';
import { JobProfileData, ReturnJobProfileData , FilterJobProfile} from './job-profile-data';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class JobProfileService {
    constructor(private prismaClientService: PrismaClientService){}

    async createJobProfile(jobProfile: JobProfileData): Promise<ReturnJobProfileData>  {
        try {
            const result : ReturnJobProfileData = await this.prismaClientService.createJobProfile(jobProfile)
            return result
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getJobProfiles(page: number, limit: number, filterData: FilterJobProfile) : Promise<ReturnJobProfileData[]>{
        try{
            const result : ReturnJobProfileData[] = await this.prismaClientService.getJobProfiles(page, limit, filterData)
            return result
        } catch (error) {
            console.log(error)
            return error
        }
    }

    

    async deleteJobs(){
        this.prismaClientService.deleteProfiles()
    }
}
