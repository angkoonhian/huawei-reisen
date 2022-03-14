"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewProviders = void 0;
const review_entity_1 = require("./review.entity");
exports.reviewProviders = [
    {
        provide: 'REVIEW_REPOSITORY',
        useFactory: (connection) => connection.getRepository(review_entity_1.review),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=review.provider.js.map