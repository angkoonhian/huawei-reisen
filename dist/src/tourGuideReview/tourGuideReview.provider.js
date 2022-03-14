"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tourGuideReviewProviders = void 0;
const tourGuideReview_entity_1 = require("./tourGuideReview.entity");
exports.tourGuideReviewProviders = [
    {
        provide: 'TOURGUIDEREVIEW_REPOSITORY',
        useFactory: (connection) => connection.getRepository(tourGuideReview_entity_1.tourGuideReview),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=tourGuideReview.provider.js.map