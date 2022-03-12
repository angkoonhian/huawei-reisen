import { Connection } from 'typeorm';
import { user } from './user.entity';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<user>;
    inject: string[];
}[];
