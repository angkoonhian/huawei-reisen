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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(entityManagerAdmin) {
        this.entityManagerAdmin = entityManagerAdmin;
    }
    async userLogin(username, password) {
        try {
            const adminRepo = await this.entityManagerAdmin
                .createQueryBuilder()
                .select('users.username, users.password')
                .from('users', 'users')
                .where('users.username = :username', { username: username })
                .getRawMany();
            if (!adminRepo) {
                throw new common_1.NotFoundException('User does not exist');
            }
            await this.checkPassword(password, adminRepo[0].password).then((res) => {
                if (!res) {
                    throw new common_1.BadRequestException('Invalid password');
                }
            });
            const token = this.getSignedJwtToken(adminRepo[0]);
            return {
                userId: adminRepo[0].userId,
                username: adminRepo[0].username,
                token: token,
                tokenExpiration: process.env.JWT_EXPIRE,
            };
        }
        catch (BadRequestException) {
            throw BadRequestException;
        }
    }
    getSignedJwtToken(loginUser) {
        return (0, jsonwebtoken_1.sign)({ userId: loginUser.username, userPassword: loginUser.password }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        return hashedPassword;
    }
    checkPassword(inputPassword, originalPassword) {
        return bcrypt.compare(inputPassword, originalPassword);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectEntityManager)('userDB')),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map