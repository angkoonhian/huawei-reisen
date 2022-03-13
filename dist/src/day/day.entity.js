"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD:dist/src/itinerary/itinerary.service.js
exports.ItineraryService = void 0;
const common_1 = require("@nestjs/common");
let ItineraryService = class ItineraryService {
    async getItineraryById(id) {
        try {
        }
        catch (err) {
        }
    }
};
ItineraryService = __decorate([
    (0, common_1.Injectable)()
], ItineraryService);
exports.ItineraryService = ItineraryService;
//# sourceMappingURL=itinerary.service.js.map
=======
exports.day = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let day = class day {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], day.prototype, "dayId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], day.prototype, "routeId", void 0);
day = __decorate([
    (0, typeorm_1.Entity)()
], day);
exports.day = day;
//# sourceMappingURL=day.entity.js.map
>>>>>>> fad916e25c272ae627e533706d71f6ae97725eaa:dist/src/day/day.entity.js
