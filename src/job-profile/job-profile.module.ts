import { Module } from '@nestjs/common';
import { JobProfileController } from './job-profile.controller';
import { JobProfileService } from './job-profile.service';
import { PrismaClientModule } from 'src/prisma-client/prisma-client.module';
import { PrismaClientService } from 'src/prisma-client/prisma-client.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [JobProfileController],
  providers: [JobProfileService, PrismaClientService]
})

export class JobProfileModule {}
