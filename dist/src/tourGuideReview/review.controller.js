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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const review_entity_1 = require("./review.entity");
const review_service_1 = require("./review.service");
let reviewController = class reviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    getAllTourGuides(attractionId) {
        return this.reviewService.getReviewByAttraction(attractionId);
    }
    getAllAttractions(reviewId) {
        return this.reviewService.getReviewById(reviewId);
    }
    createDay(review) {
        return this.reviewService.createReview(review);
    }
};
__decorate([
    (0, common_1.Get)('/:getReviewByAttraction'),
    (0, swagger_1.ApiOperation)({ summary: 'Get review by attraction' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: review_entity_1.review }),
    __param(0, (0, common_1.Param)('attractionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], reviewController.prototype, "getAllTourGuides", null);
__decorate([
    (0, common_1.Get)('/:getReviewById'),
    (0, swagger_1.ApiOperation)({ summary: 'Get review by Id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: review_entity_1.review }),
    __param(0, (0, common_1.Param)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], reviewController.prototype, "getAllAttractions", null);
__decorate([
    (0, common_1.Post)('/createReview'),
    (0, swagger_1.ApiOperation)({ summary: 'Create review' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: review_entity_1.review }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof review_entity_1.review !== "undefined" && review_entity_1.review) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], reviewController.prototype, "createDay", null);
reviewController = __decorate([
    (0, swagger_1.ApiTags)('review'),
    (0, common_1.Controller)('review'),
    __metadata("design:paramtypes", [typeof (_b = typeof review_service_1.reviewService !== "undefined" && review_service_1.reviewService) === "function" ? _b : Object])
], reviewController);
exports.reviewController = reviewController;
//# sourceMappingURL=review.controller.js.map