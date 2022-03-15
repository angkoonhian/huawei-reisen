import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { attractionSlotModule } from "src/attractionSlot/attractionSlot.module";
import { DatabaseModule } from "src/database/database.module";
import { dayModule } from "src/day/day.module";
import { routeModule } from "src/route/route.module";
import { itineraryController } from './itinerary.controller';
import { itineraryProviders } from "./itinerary.provider";
import { ItineraryService } from "./itinerary.service";

@Module({
    imports: [
        DatabaseModule,
        HttpModule,
        dayModule,
        routeModule,
        attractionSlotModule
    ],
    controllers: [itineraryController],
    providers: [
        ...itineraryProviders,
        ItineraryService,
    ],

})

export class itineraryModule {}