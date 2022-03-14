"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourGuideProviders = void 0;
const tourGuide_entity_1 = require("./tourGuide.entity");
exports.tourGuideProviders = [
    {
        provide: 'TOURGUIDE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(tourGuide_entity_1.tourGuide),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=tourGuide.provider.js.map