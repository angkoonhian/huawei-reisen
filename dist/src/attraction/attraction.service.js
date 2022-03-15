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
exports.attractionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let attractionService = class attractionService {
    constructor(attractionRepository) {
        this.attractionRepository = attractionRepository;
    }
    async getAllAttractions() {
        await this.attractionRepository.find().then(result => {
            try {
                console.log(result);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    async getAttractionsById(id) {
        await this.attractionRepository.findOne({ attractionId: id }).then(res => {
            try {
                console.log(res);
            }
            catch (err) {
                throw err;
            }
        });
    }
    async createAttraction(attraction) {
        attraction.attractionId = (0, uuid_1.v4)();
        this.attractionRepository.save(attraction).then(result => {
            console.log(result);
            return result;
        });
    }
};
attractionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ATTRACTION_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], attractionService);
exports.attractionService = attractionService;
//# sourceMappingURL=attraction.service.js.map