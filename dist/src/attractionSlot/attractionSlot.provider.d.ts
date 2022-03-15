import { Connection } from 'typeorm';
import { attractionSlot } from './attractionSlot.entity';
export declare const attractionSlotProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<attractionSlot>;
    inject: string[];
}[];
