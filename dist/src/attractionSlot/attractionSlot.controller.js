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
exports.attractionSlotController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const attractionSlot_entity_1 = require("./attractionSlot.entity");
const attractionSlot_service_1 = require("./attractionSlot.service");
let attractionSlotController = class attractionSlotController {
    constructor(attractionSlotService) {
        this.attractionSlotService = attractionSlotService;
    }
    getAllTourGuides(attractionId) {
        return this.attractionSlotService.getAttractionSlotByDayId(attractionId);
    }
    getAllAttractions(reviewId) {
        return this.attractionSlotService.getAttractionSlotById(reviewId);
    }
    createDay(attractionSlot) {
        return this.attractionSlotService.createAttractionSlot(attractionSlot);
    }
};
__decorate([
    (0, common_1.Get)('/:getAttractionSlotByDay'),
    (0, swagger_1.ApiOperation)({ summary: 'Get attraction slot by day' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: attractionSlot_entity_1.attractionSlot }),
    __param(0, (0, common_1.Param)('attractionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], attractionSlotController.prototype, "getAllTourGuides", null);
__decorate([
    (0, common_1.Get)('/:getAttractionSlotById'),
    (0, swagger_1.ApiOperation)({ summary: 'Get attraction Slot by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: attractionSlot_entity_1.attractionSlot }),
    __param(0, (0, common_1.Param)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], attractionSlotController.prototype, "getAllAttractions", null);
__decorate([
    (0, common_1.Post)('/createtourGuideAvailability'),
    (0, swagger_1.ApiOperation)({ summary: 'Create tourGuideAvailability' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: attractionSlot_entity_1.attractionSlot }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attractionSlot_entity_1.attractionSlot]),
    __metadata("design:returntype", void 0)
], attractionSlotController.prototype, "createDay", null);
attractionSlotController = __decorate([
    (0, swagger_1.ApiTags)('attractionSlot'),
    (0, common_1.Controller)('attractionSlot'),
    __metadata("design:paramtypes", [attractionSlot_service_1.attractionSlotService])
], attractionSlotController);
exports.attractionSlotController = attractionSlotController;
//# sourceMappingURL=attractionSlot.controller.js.map