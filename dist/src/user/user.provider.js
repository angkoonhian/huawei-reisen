"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_entity_1 = require("./user.entity");
exports.userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(user_entity_1.user),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=user.provider.js.map