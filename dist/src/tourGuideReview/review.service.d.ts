import { Repository } from 'typeorm';
import { review } from './review.entity';
export declare class reviewService {
    private reviewRepository;
    constructor(reviewRepository: Repository<review>);
    getReviewByAttraction(attractionId: any): Promise<void>;
    getReviewById(reviewId: any): Promise<void>;
    createReview(review: review): Promise<void>;
}
