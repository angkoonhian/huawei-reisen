import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { attractionSlotController } from './attractionSlot.controller';
import { attractionSlotProviders } from "./attractionSlot.provider";
import { attractionSlotService } from "./attractionSlot.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [attractionSlotController],
    providers: [
        ...attractionSlotProviders,
        attractionSlotService,
    ]
})

export class attractionSlotModule {}