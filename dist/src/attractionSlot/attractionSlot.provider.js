"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attractionSlotProviders = void 0;
const attractionSlot_entity_1 = require("./attractionSlot.entity");
exports.attractionSlotProviders = [
    {
        provide: 'ATTRACTIONSLOT_REPOSITORY',
        useFactory: (connection) => connection.getRepository(attractionSlot_entity_1.attractionSlot),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=attractionSlot.provider.js.map