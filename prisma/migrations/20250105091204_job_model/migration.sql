-- CreateTable
CREATE TABLE "JobProfile" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "jobLocation" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "jobCompany" TEXT NOT NULL,
    "jobRequirements" TEXT NOT NULL,
    "jobResponsibilities" TEXT NOT NULL,
    "jobSalary" INTEGER[],

    CONSTRAINT "JobProfile_pkey" PRIMARY KEY ("id")
);
