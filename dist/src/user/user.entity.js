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
exports.user = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let user = class user {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], user.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], user.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], user.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], user.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], user.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], user.prototype, "interest", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], user.prototype, "currentItenary", void 0);
user = __decorate([
    (0, typeorm_1.Entity)()
], user);
exports.user = user;
//# sourceMappingURL=user.entity.js.map