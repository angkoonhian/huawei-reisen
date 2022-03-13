"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attractionProviders = void 0;
const attraction_entity_1 = require("./attraction.entity");
exports.attractionProviders = [
    {
        provide: 'ATTRACTION_REPOSITORY',
        useFactory: (connection) => connection.getRepository(attraction_entity_1.attraction),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=attraction.provider.js.map