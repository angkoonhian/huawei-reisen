import { Connection } from 'typeorm';
import { itinerary } from './itinerary.entity';
export declare const itineraryProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<itinerary>;
    inject: string[];
}[];
