"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourGuideAvailabilityModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const tourGuideAvailability_controller_1 = require("./tourGuideAvailability.controller");
const tourGuideAvailability_provider_1 = require("./tourGuideAvailability.provider");
const tourGuideAvailability_service_1 = require("./tourGuideAvailability.service");
let tourGuideAvailabilityModule = class tourGuideAvailabilityModule {
};
tourGuideAvailabilityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
        ],
        controllers: [tourGuideAvailability_controller_1.tourGuideAvailabilityController],
        providers: [
            ...tourGuideAvailability_provider_1.tourGuideAvailabilityProviders,
            tourGuideAvailability_service_1.tourGuideAvailabilityService,
        ]
    })
], tourGuideAvailabilityModule);
exports.tourGuideAvailabilityModule = tourGuideAvailabilityModule;
//# sourceMappingURL=tourGuideAvailability.module.js.map