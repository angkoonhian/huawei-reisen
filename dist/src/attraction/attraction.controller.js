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
exports.attractionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const attraction_entity_1 = require("./attraction.entity");
const attraction_service_1 = require("./attraction.service");
let attractionController = class attractionController {
    constructor(attractionService) {
        this.attractionService = attractionService;
    }
    getAllAttractions() {
        const attraction = this.attractionService.getAllAttractions();
        console.log(attraction);
        return attraction;
    }
    createAttraction(attraction) {
        return this.attractionService.createAttraction(attraction);
    }
};
__decorate([
    (0, common_1.Get)('/getAllAttractions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one attraction' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: attraction_entity_1.attraction }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], attractionController.prototype, "getAllAttractions", null);
__decorate([
    (0, common_1.Post)('/createAttraction'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Attraction' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: attraction_entity_1.attraction }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attraction_entity_1.attraction]),
    __metadata("design:returntype", void 0)
], attractionController.prototype, "createAttraction", null);
attractionController = __decorate([
    (0, swagger_1.ApiTags)('attraction'),
    (0, common_1.Controller)('attraction'),
    __metadata("design:paramtypes", [attraction_service_1.attractionService])
], attractionController);
exports.attractionController = attractionController;
//# sourceMappingURL=attraction.controller.js.map