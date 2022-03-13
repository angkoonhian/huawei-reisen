import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { attractionController } from './attraction.controller';
import { attractionProviders } from "./attraction.provider";
import { attractionService } from "./attraction.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [attractionController],
    providers: [
        ...attractionProviders,
        attractionService,
    ]
})

export class attractionModule {}