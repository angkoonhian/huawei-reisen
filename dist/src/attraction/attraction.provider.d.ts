import { Connection } from 'typeorm';
import { attraction } from './attraction.entity';
export declare const attractionProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<attraction>;
    inject: string[];
}[];
