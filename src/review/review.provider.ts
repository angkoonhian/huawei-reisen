import { Connection } from 'typeorm';
import { review } from './review.entity';

export const reviewProviders = [
    {
        provide: 'REVIEW_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(review),
        inject: ['DATABASE_CONNECTION'],
    }
]