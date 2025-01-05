type JobProfileData = {
    "jobTitle": string,
    "jobType": string,
    "jobDescription": string,
    "location": string,
    "salaryRange": number[],
    "jobRequirements": string,
    "jobResponsibilities": string,
    "companyName": string,
}

type ReturnJobProfileData = {
    "id": number,
  "jobTitle": string,
  "jobType": string,
  "jobLocation": string,
  "jobDescription": string,
  "jobCompany": string,
  "jobRequirements": string,
  "jobResponsibilities": string,
  "jobSalary": number[]
}

type FilterJobProfile = {
  "jobTitle"?: string,
  "jobType"?: string,
  "location"?: string,
  "salaryRange"?: number[]
}

export {JobProfileData, ReturnJobProfileData, FilterJobProfile}