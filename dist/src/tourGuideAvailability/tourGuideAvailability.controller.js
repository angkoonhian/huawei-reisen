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
exports.tourGuideAvailabilityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tourGuideAvailability_entity_1 = require("./tourGuideAvailability.entity");
const tourGuideAvailability_service_1 = require("./tourGuideAvailability.service");
let tourGuideAvailabilityController = class tourGuideAvailabilityController {
    constructor(tourGuideAvailabilityService) {
        this.tourGuideAvailabilityService = tourGuideAvailabilityService;
    }
    getAllTourGuides(attractionId) {
        return this.tourGuideAvailabilityService.getReviewByTourGuideId(attractionId);
    }
    getAllAttractions(reviewId) {
        return this.tourGuideAvailabilityService.getReviewById(reviewId);
    }
    createDay(tourGuideAvailability) {
        return this.tourGuideAvailabilityService.createTourGuideAvailability(tourGuideAvailability);
    }
};
__decorate([
    (0, common_1.Get)('/:getReviewByAttraction'),
    (0, swagger_1.ApiOperation)({ summary: 'Get review by attraction' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: tourGuideAvailability_entity_1.tourGuideAvailability }),
    __param(0, (0, common_1.Param)('attractionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], tourGuideAvailabilityController.prototype, "getAllTourGuides", null);
__decorate([
    (0, common_1.Get)('/:getReviewById'),
    (0, swagger_1.ApiOperation)({ summary: 'Get review by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: tourGuideAvailability_entity_1.tourGuideAvailability }),
    __param(0, (0, common_1.Param)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], tourGuideAvailabilityController.prototype, "getAllAttractions", null);
__decorate([
    (0, common_1.Post)('/createtourGuideAvailability'),
    (0, swagger_1.ApiOperation)({ summary: 'Create tourGuideAvailability' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: tourGuideAvailability_entity_1.tourGuideAvailability }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tourGuideAvailability_entity_1.tourGuideAvailability]),
    __metadata("design:returntype", void 0)
], tourGuideAvailabilityController.prototype, "createDay", null);
tourGuideAvailabilityController = __decorate([
    (0, swagger_1.ApiTags)('tourGuideAvailability'),
    (0, common_1.Controller)('tourGuideAvailability'),
    __metadata("design:paramtypes", [tourGuideAvailability_service_1.tourGuideAvailabilityService])
], tourGuideAvailabilityController);
exports.tourGuideAvailabilityController = tourGuideAvailabilityController;
//# sourceMappingURL=tourGuideAvailability.controller.js.map