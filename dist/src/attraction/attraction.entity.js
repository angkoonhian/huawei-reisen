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
Object.defineProperty(exports, "__esModule", { value: true });
exports.attraction = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let attraction = class attraction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "attractionId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "attractionName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "organisation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], attraction.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('point'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "geoLong", void 0);
__decorate([
    (0, typeorm_1.Column)('point'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "geoLat", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "imageUrls", void 0);
__decorate([
    (0, typeorm_1.Column)("double"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], attraction.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "operatingHours", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "websiteUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], attraction.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], attraction.prototype, "reviewCount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], attraction.prototype, "likes", void 0);
attraction = __decorate([
    (0, typeorm_1.Entity)()
], attraction);
exports.attraction = attraction;
//# sourceMappingURL=attraction.entity.js.map