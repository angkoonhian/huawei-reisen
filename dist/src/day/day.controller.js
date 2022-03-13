"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const day_entity_1 = require("./day.entity");
const day_service_1 = require("./day.service");
let dayController = class dayController {
    constructor(dayService) {
        this.dayService = dayService;
    }
    getAllAttractions(routeId) {
        return this.dayService.getRouteDays(routeId);
    }
    createDay(day) {
        return this.dayService.createDay(day);
    }
};
__decorate([
    (0, common_1.Get)('/:routeId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get User Itinerary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: day_entity_1.day }),
    __param(0, (0, common_1.Param)('route id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], dayController.prototype, "getAllAttractions", null);
__decorate([
    (0, common_1.Post)('/createDay'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Day' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: day_entity_1.day }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [day_entity_1.day]),
    __metadata("design:returntype", void 0)
], dayController.prototype, "createDay", null);
dayController = __decorate([
    (0, swagger_1.ApiTags)('day'),
    (0, common_1.Controller)('day'),
    __metadata("design:paramtypes", [day_service_1.dayService])
], dayController);
exports.dayController = dayController;
//# sourceMappingURL=day.controller.js.map