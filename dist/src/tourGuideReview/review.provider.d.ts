import { Connection } from 'typeorm';
import { review } from './review.entity';
export declare const reviewProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<review>;
    inject: string[];
}[];
