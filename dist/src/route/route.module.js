"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const route_controller_1 = require("./route.controller");
const route_provider_1 = require("./route.provider");
const route_service_1 = require("./route.service");
let routeModule = class routeModule {
};
routeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
        ],
        controllers: [route_controller_1.routeController],
        providers: [
            ...route_provider_1.routeProviders,
            route_service_1.routeService,
        ]
    })
], routeModule);
exports.routeModule = routeModule;
//# sourceMappingURL=route.module.js.map