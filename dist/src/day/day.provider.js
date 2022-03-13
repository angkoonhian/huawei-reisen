"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayProviders = void 0;
const day_entity_1 = require("./day.entity");
exports.dayProviders = [
    {
        provide: 'DAY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(day_entity_1.day),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=day.provider.js.map