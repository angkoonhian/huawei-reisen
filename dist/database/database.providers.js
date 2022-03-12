"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'mysql',
            port: 3306,
            host: '122.9.100.94',
            username: 'root',
            name: 'reisen',
            password: 'Fatfatbee01@261114',
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map