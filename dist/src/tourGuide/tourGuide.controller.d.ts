import { tourGuide } from './tourGuide.entity';
import { tourGuideService } from './tourGuide.service';
export declare class tourGuideController {
    private tourGuideService;
    constructor(tourGuideService: tourGuideService);
    getAllTourGuides(): Promise<void>;
    getAllAttractions(routeId: string): Promise<void>;
    createDay(tourGuide: tourGuide): Promise<void>;
}
