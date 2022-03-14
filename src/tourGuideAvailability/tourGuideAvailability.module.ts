import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { tourGuideAvailabilityController } from './tourGuideAvailability.controller';
import { tourGuideAvailabilityProviders } from "./tourGuideAvailability.provider";
import { tourGuideAvailabilityService } from "./tourGuideAvailability.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [tourGuideAvailabilityController],
    providers: [
        ...tourGuideAvailabilityProviders,
        tourGuideAvailabilityService,
    ]
})

export class tourGuideAvailabilityModule {}