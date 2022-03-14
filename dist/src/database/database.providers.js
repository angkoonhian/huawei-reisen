"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const user_entity_1 = require("../user/user.entity");
const itinerary_entity_1 = require("../itinerary/itinerary.entity");
const typeorm_1 = require("typeorm");
const attraction_entity_1 = require("../attraction/attraction.entity");
const day_entity_1 = require("../day/day.entity");
const route_entity_1 = require("../route/route.entity");
const tags_entity_1 = require("../tags/tags.entity");
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
            entities: [user_entity_1.user, itinerary_entity_1.itinerary, attraction_entity_1.attraction, day_entity_1.day, route_entity_1.route, tags_entity_1.tag],
            synchronize: false,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map