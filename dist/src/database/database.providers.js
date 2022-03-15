"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const user_entity_1 = require("../user/user.entity");
const itinerary_entity_1 = require("../itinerary/itinerary.entity");
const typeorm_1 = require("typeorm");
const attraction_entity_1 = require("../attraction/attraction.entity");
const day_entity_1 = require("../day/day.entity");
const route_entity_1 = require("../route/route.entity");
const tourGuide_entity_1 = require("../tourGuide/tourGuide.entity");
const review_entity_1 = require("../review/review.entity");
const tourGuideAvailability_entity_1 = require("../tourGuideAvailability/tourGuideAvailability.entity");
const attractionSlot_entity_1 = require("../attractionSlot/attractionSlot.entity");
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
            database: 'reisen',
            entities: [user_entity_1.user, itinerary_entity_1.itinerary, attraction_entity_1.attraction, day_entity_1.day, route_entity_1.route, tourGuide_entity_1.tourGuide, review_entity_1.review, tourGuideAvailability_entity_1.tourGuideAvailability, attractionSlot_entity_1.attractionSlot],
            synchronize: false,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map