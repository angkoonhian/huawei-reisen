import { Connection } from 'typeorm';
import { tourGuideReview } from './tourGuideReview.entity';

export const tourGuideReviewProviders = [
    {
        provide: 'TOURGUIDEREVIEW_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(tourGuideReview),
        inject: ['DATABASE_CONNECTION'],
    }
]