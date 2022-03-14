import { tourGuideAvailability } from './tourGuideAvailability.entity';
import { tourGuideAvailabilityService } from './tourGuideAvailability.service';
export declare class tourGuideAvailabilityController {
    private tourGuideAvailabilityService;
    constructor(tourGuideAvailabilityService: tourGuideAvailabilityService);
    getAllTourGuides(attractionId: string): Promise<void>;
    getAllAttractions(reviewId: string): Promise<void>;
    createDay(tourGuideAvailability: tourGuideAvailability): Promise<void>;
}
