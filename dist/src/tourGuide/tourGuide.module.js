"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourGuideModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const tourGuide_controller_1 = require("./tourGuide.controller");
const tourGuide_provider_1 = require("./tourGuide.provider");
const tourGuide_service_1 = require("./tourGuide.service");
let tourGuideModule = class tourGuideModule {
};
tourGuideModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
        ],
        controllers: [tourGuide_controller_1.tourGuideController],
        providers: [
            ...tourGuide_provider_1.tourGuideProviders,
            tourGuide_service_1.tourGuideService,
        ]
    })
], tourGuideModule);
exports.tourGuideModule = tourGuideModule;
//# sourceMappingURL=tourGuide.module.js.map