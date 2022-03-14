import { Connection } from 'typeorm';
import { tourGuideAvailability } from './tourGuideAvailability.entity';
export declare const tourGuideAvailabilityProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<tourGuideAvailability>;
    inject: string[];
}[];
