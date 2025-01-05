import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobProfileModule } from './job-profile/job-profile.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaClientModule } from './prisma-client/prisma-client.module';

@Module({
  imports: [JobProfileModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
