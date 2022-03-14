import { Connection } from 'typeorm';
import { tourGuideReview } from './tourGuideReview.entity';
export declare const tourGuideReviewProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<tourGuideReview>;
    inject: string[];
}[];
