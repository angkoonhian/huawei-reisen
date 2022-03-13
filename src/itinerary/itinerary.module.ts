import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { itineraryController } from './itinerary.controller';
import { itineraryProviders } from "./itinerary.provider";
import { ItineraryService } from "./itinerary.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [itineraryController],
    providers: [
        ...itineraryProviders,
        ItineraryService,
    ]
})

export class itineraryModule {}