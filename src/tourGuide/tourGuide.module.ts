import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { tourGuideController } from './tourGuide.controller';
import { tourGuideProviders } from "./tourGuide.provider";
import { tourGuideService } from "./tourGuide.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [tourGuideController],
    providers: [
        ...tourGuideProviders,
        tourGuideService,
    ]
})

export class tourGuideModule {}