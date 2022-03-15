import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { routeController } from './route.controller';
import { routeProviders } from "./route.provider";
import { routeService } from "./route.service";

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [routeController],
    providers: [
        ...routeProviders,
        routeService,
    ],
    exports: [
        routeService,
    ]
})

export class routeModule {}