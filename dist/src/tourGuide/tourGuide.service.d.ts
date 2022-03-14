import { Repository } from 'typeorm';
import { tourGuide } from './tourGuide.entity';
export declare class tourGuideService {
    private tourGuideRepository;
    constructor(tourGuideRepository: Repository<tourGuide>);
    getAllTourGuides(): Promise<void>;
    getTourGuideById(tourGuideId: any): Promise<void>;
    createTourGuide(tourGuide: tourGuide): Promise<void>;
}
