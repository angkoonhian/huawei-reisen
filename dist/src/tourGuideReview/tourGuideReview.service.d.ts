import { Repository } from 'typeorm';
import { tourGuideReview } from './tourGuideReview.entity';
export declare class tourGuideReviewService {
    private reviewRepository;
    constructor(reviewRepository: Repository<tourGuideReview>);
    getReviewByTourGuideId(attractionId: any): Promise<void>;
    getReviewById(reviewId: any): Promise<void>;
    createReview(tourGuideReview: tourGuideReview): Promise<void>;
}
