import { attraction } from './attraction.entity';
import { attractionService } from './attraction.service';
export declare class attractionController {
    private attractionService;
    constructor(attractionService: attractionService);
    getAllAttractions(): Promise<void>;
    createAttraction(attraction: attraction): Promise<void>;
}
