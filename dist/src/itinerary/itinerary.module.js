"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itineraryModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const attractionSlot_module_1 = require("../attractionSlot/attractionSlot.module");
const database_module_1 = require("../database/database.module");
const day_module_1 = require("../day/day.module");
const route_module_1 = require("../route/route.module");
const itinerary_controller_1 = require("./itinerary.controller");
const itinerary_provider_1 = require("./itinerary.provider");
const itinerary_service_1 = require("./itinerary.service");
let itineraryModule = class itineraryModule {
};
itineraryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            axios_1.HttpModule,
            day_module_1.dayModule,
            route_module_1.routeModule,
            attractionSlot_module_1.attractionSlotModule
        ],
        controllers: [itinerary_controller_1.itineraryController],
        providers: [
            ...itinerary_provider_1.itineraryProviders,
            itinerary_service_1.ItineraryService,
        ],
    })
], itineraryModule);
exports.itineraryModule = itineraryModule;
//# sourceMappingURL=itinerary.module.js.map