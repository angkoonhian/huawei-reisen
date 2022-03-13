"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeProviders = void 0;
const route_entity_1 = require("./route.entity");
exports.routeProviders = [
    {
        provide: 'ROUTE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(route_entity_1.route),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=route.provider.js.map