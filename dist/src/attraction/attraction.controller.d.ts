import { attraction } from './attraction.entity';
import { attractionService } from './attraction.service';
export declare class attractionController {
    private attractionService;
    constructor(attractionService: attractionService);
    getAllAttractions(): Promise<attraction[]>;
    getAttractionById(id: string): Promise<attraction>;
    createAttraction(attraction: attraction): Promise<void>;
}
