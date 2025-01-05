import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { JobProfileService } from './job-profile.service';
import { JobProfileData, ReturnJobProfileData } from './job-profile-data';
import { filter, shareReplay } from 'rxjs';

@Controller('job-profile')
export class JobProfileController {

    constructor(private jobProfileService: JobProfileService){}

 
    @Get("/jobProfiles")
    async getJobProfiles(@Query('page') page, @Query('limit') limit, @Query('jobTitle') jobTitle, @Query('jobType') jobType, @Query('jobLocation') jobLocation, @Query('salaryRange') salaryRange): Promise<ReturnJobProfileData[]> {
       
       try{
            const filter = {
                jobTitle : jobTitle ?? null, 
                jobType :  jobType ?? null,
                jobLocation: jobLocation ?? null,
                salaryRange: salaryRange ? salaryRange.split(',').map((e)=>Number(e)) : null
            }
            if(page === undefined ){
                page = 1
            }
            if(limit === undefined){
                limit = 10
            }
            const jobProfiles : Promise<ReturnJobProfileData[]> = this.jobProfileService.getJobProfiles(Number(page), Number(limit), filter)
            
            return jobProfiles
       } catch (error) {
           return error.message
       }
    }

    @Post("/newJob")
    async createJobProfile(@Body () jobProfile: JobProfileData)  {
     
         try {
            const result = await this.jobProfileService.createJobProfile(jobProfile)
            return JSON.stringify(result) || "Operation Successful"  
         } catch (error) {
            console.log(error)
            return error.message
         }
    }

    @Get("/del")
    async del() {
        this.jobProfileService.deleteJobs
    }
}
