import { Connection } from 'typeorm';
import { route } from './route.entity';
export declare const routeProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<route>;
    inject: string[];
}[];
