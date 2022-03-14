import { Repository } from 'typeorm';
import { tourGuideAvailability } from './tourGuideAvailability.entity';
export declare class tourGuideAvailabilityService {
    private tourGuideAvailabilityRepository;
    constructor(tourGuideAvailabilityRepository: Repository<tourGuideAvailability>);
    getReviewByTourGuideId(tourGuideId: any): Promise<void>;
    getReviewById(availabilityId: any): Promise<void>;
    createTourGuideAvailability(tourGuideAvailability: tourGuideAvailability): Promise<void>;
}
