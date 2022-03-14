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
exports.tourGuide = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let tourGuide = class tourGuide {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "tourGuideId", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "guideProfile", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "contactEmail", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], tourGuide.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tourGuide.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], tourGuide.prototype, "certified", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], tourGuide.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)("double"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], tourGuide.prototype, "price", void 0);
tourGuide = __decorate([
    (0, typeorm_1.Entity)()
], tourGuide);
exports.tourGuide = tourGuide;
//# sourceMappingURL=tourGuide.entity.js.map