import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { dayController } from './day.controller';
import { dayProviders } from "./day.provider";
import { dayService } from "./day.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [dayController],
    providers: [
        ...dayProviders,
        dayService,
    ]
})

export class dayModule {}