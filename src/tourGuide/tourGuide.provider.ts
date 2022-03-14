import { Connection } from 'typeorm';
import { tourGuide } from './tourGuide.entity';

export const tourGuideProviders = [
    {
        provide: 'TOURGUIDE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(tourGuide),
        inject: ['DATABASE_CONNECTION'],
    }
]