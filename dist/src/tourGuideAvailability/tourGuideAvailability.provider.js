"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourGuideAvailabilityProviders = void 0;
const tourGuideAvailability_entity_1 = require("./tourGuideAvailability.entity");
exports.tourGuideAvailabilityProviders = [
    {
        provide: 'TOURGUIDEAVAILABILITY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(tourGuideAvailability_entity_1.tourGuideAvailability),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=tourGuideAvailability.provider.js.map