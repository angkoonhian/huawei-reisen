import { tourGuideReview } from './tourGuideReview.entity';
import { tourGuideReviewService } from './tourGuideReview.service';
export declare class tourGuideReviewController {
    private tourGuideReviewService;
    constructor(tourGuideReviewService: tourGuideReviewService);
    getAllTourGuides(tourGuideId: string): Promise<void>;
    getAllAttractions(reviewId: string): Promise<void>;
    createDay(tourGuideReview: tourGuideReview): Promise<void>;
}
