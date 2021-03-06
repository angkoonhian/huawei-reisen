"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const Joi = require("joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const attraction_module_1 = require("./attraction/attraction.module");
const attractionSlot_module_1 = require("./attractionSlot/attractionSlot.module");
const database_module_1 = require("./database/database.module");
const day_module_1 = require("./day/day.module");
const itinerary_module_1 = require("./itinerary/itinerary.module");
const review_module_1 = require("./review/review.module");
const route_module_1 = require("./route/route.module");
const tourGuide_module_1 = require("./tourGuide/tourGuide.module");
const tourGuideAvailability_module_1 = require("./tourGuideAvailability/tourGuideAvailability.module");
const user_module_1 = require("./user/user.module");
const axios_1 = require("@nestjs/axios");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                envFilePath: './config/config.env',
                isGlobal: true,
                validationSchema: Joi.object({
                    NODE_ENV: Joi.string()
                        .valid('development', 'production')
                        .default('development'),
                    PORT: Joi.number().default(3000),
                }),
            }),
            database_module_1.DatabaseModule,
            user_module_1.userModule,
            itinerary_module_1.itineraryModule,
            attraction_module_1.attractionModule,
            day_module_1.dayModule,
            route_module_1.routeModule,
            tourGuide_module_1.tourGuideModule,
            review_module_1.reviewModule,
            tourGuideAvailability_module_1.tourGuideAvailabilityModule,
            attractionSlot_module_1.attractionSlotModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map