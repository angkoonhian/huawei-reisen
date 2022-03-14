import { TagsService } from 'src/tags/tags.service';
import { attraction } from './attraction.entity';
import { attractionService } from './attraction.service';
export declare class attractionController {
    private attractionService;
    private tagsServie;
    constructor(attractionService: attractionService, tagsServie: TagsService);
    getAllAttractions(): Promise<void>;
    createAttraction(attraction: attraction): Promise<void>;
}
