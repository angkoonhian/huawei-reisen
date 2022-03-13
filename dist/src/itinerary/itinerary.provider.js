"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itineraryProviders = void 0;
const itinerary_entity_1 = require("./itinerary.entity");
exports.itineraryProviders = [
    {
        provide: 'ITENARY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(itinerary_entity_1.itinerary),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=itinerary.provider.js.map