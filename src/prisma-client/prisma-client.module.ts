import { Module } from '@nestjs/common';
import { PrismaClientController } from './prisma-client.controller';
import { PrismaClientService } from './prisma-client.service';

@Module({
  controllers: [PrismaClientController],
  providers: [PrismaClientService]
})
export class PrismaClientModule {}
