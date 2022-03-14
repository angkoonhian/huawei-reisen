import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { tourGuideReviewController } from './tourGuideReview.controller';
import { tourGuideReviewProviders } from "./tourGuideReview.provider";
import { tourGuideReviewService } from "./tourGuideReview.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [tourGuideReviewController],
    providers: [
        ...tourGuideReviewProviders,
        tourGuideReviewService,
    ]
})

export class tourGuideReviewModule {}