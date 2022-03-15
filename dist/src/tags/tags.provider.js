"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsProvider = void 0;
const tags_entity_1 = require("./tags.entity");
exports.tagsProvider = [
    {
        provide: 'TAGS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(tags_entity_1.tag),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=tags.provider.js.map