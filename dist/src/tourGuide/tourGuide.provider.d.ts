import { Connection } from 'typeorm';
import { tourGuide } from './tourGuide.entity';
export declare const tourGuideProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<tourGuide>;
    inject: string[];
}[];
