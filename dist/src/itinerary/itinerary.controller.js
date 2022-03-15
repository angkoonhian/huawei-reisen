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
exports.itineraryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const itinerary_entity_1 = require("./itinerary.entity");
const itinerary_service_1 = require("./itinerary.service");
const itinerary_dto_1 = require("./model/itinerary.dto");
let itineraryController = class itineraryController {
    constructor(itineraryService) {
        this.itineraryService = itineraryService;
    }
    getItineraryById(id) {
        return this.itineraryService.getItineraryById(id);
    }
    createAttraction(itinerary) {
        return this.itineraryService.createItinerary(itinerary);
    }
    generateItinerary(itineraryMLDTO) {
        return this.itineraryService.generateItinerary(itineraryMLDTO);
    }
};
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get User Itinerary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: itinerary_entity_1.itinerary }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], itineraryController.prototype, "getItineraryById", null);
__decorate([
    (0, common_1.Post)('/createItinerary'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Itinerary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: itinerary_entity_1.itinerary }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [itinerary_entity_1.itinerary]),
    __metadata("design:returntype", void 0)
], itineraryController.prototype, "createAttraction", null);
__decorate([
    (0, common_1.Post)('/generateItinerary'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate Itinerary' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The record has been successfully created.', type: itinerary_entity_1.itinerary }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [itinerary_dto_1.itineraryMLDTO]),
    __metadata("design:returntype", void 0)
], itineraryController.prototype, "generateItinerary", null);
itineraryController = __decorate([
    (0, swagger_1.ApiTags)('itinerary'),
    (0, common_1.Controller)('itinerary'),
    __metadata("design:paramtypes", [itinerary_service_1.ItineraryService])
], itineraryController);
exports.itineraryController = itineraryController;
//# sourceMappingURL=itinerary.controller.js.map