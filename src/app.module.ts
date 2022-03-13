import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { attractionModule } from './attraction/attraction.module';
import { DatabaseModule } from './database/database.module';
import { dayModule } from './day/day.module';
import { itineraryModule } from './itinerary/itinerary.module';
import { routeModule } from './route/route.module';
import { userModule } from './user/user.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: './config/config.env',
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    DatabaseModule,
    userModule,
    itineraryModule,
    attractionModule,
    dayModule,
    routeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
