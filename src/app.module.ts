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
import { reviewModule } from './review/review.module';
import { routeModule } from './route/route.module';
import { tourGuideModule } from './tourGuide/tourGuide.module';
import { tourGuideAvailabilityModule } from './tourGuideAvailability/tourGuideAvailability.module';
import { userModule } from './user/user.module';
import { TagsController } from './tags/tags.controller';
import { TagsService } from './tags/tags.service';
import { tagsModule } from './tags/tags.module';

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
    tourGuideModule,
    reviewModule,
    tourGuideAvailabilityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
