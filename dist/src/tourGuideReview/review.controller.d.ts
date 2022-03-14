import { review } from './review.entity';
import { reviewService } from './review.service';
export declare class reviewController {
    private reviewService;
    constructor(reviewService: reviewService);
    getAllTourGuides(attractionId: string): any;
    getAllAttractions(reviewId: string): any;
    createDay(review: review): any;
}
