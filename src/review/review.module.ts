import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { reviewController } from './review.controller';
import { reviewProviders } from "./review.provider";
import { reviewService } from "./review.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [reviewController],
    providers: [
        ...reviewProviders,
        reviewService,
    ]
})

export class reviewModule {}