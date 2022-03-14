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
exports.review = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let review = class review {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], review.prototype, "reviewId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], review.prototype, "attractionId", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], review.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)("int"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], review.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], review.prototype, "reviewBy", void 0);
review = __decorate([
    (0, typeorm_1.Entity)()
], review);
exports.review = review;
//# sourceMappingURL=review.entity.js.map