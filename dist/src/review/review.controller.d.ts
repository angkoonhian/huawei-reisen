import { review } from './review.entity';
import { reviewService } from './review.service';
export declare class reviewController {
    private reviewService;
    constructor(reviewService: reviewService);
    getAllTourGuides(attractionId: string): Promise<void>;
    getAllAttractions(reviewId: string): Promise<void>;
    createDay(review: review): Promise<void>;
}
