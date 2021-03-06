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
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_model_1 = require("./model/user.model");
const user_entity_1 = require("./user.entity");
let userController = class userController {
    constructor(userService) {
        this.userService = userService;
    }
    loginUser(userLoginDTO) {
        return this.userService.userLogin(userLoginDTO.name, userLoginDTO.password);
    }
    getUser(id) {
        return this.userService.getUserById(id);
    }
    updateUser(userDTO) {
        return this.userService.updateUser(userDTO);
    }
    signUpUser(userLoginDTO) {
        return this.userService.signUpUser(userLoginDTO);
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: user_entity_1.user }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.userLoginDTO]),
    __metadata("design:returntype", void 0)
], userController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'get all user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: user_entity_1.user }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], userController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('/updateUser'),
    (0, swagger_1.ApiOperation)({ summary: 'update user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: user_entity_1.user }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.userDTO]),
    __metadata("design:returntype", void 0)
], userController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Post)('/signUp'),
    (0, swagger_1.ApiOperation)({ summary: 'sign up user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'the found record', type: user_entity_1.user }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.userLoginDTO]),
    __metadata("design:returntype", void 0)
], userController.prototype, "signUpUser", null);
userController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], userController);
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map