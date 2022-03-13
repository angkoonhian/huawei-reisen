import { Connection } from 'typeorm';
import { day } from './day.entity';
export declare const dayProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<day>;
    inject: string[];
}[];
