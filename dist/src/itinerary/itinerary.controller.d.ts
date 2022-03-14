import { itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';
export declare class itineraryController {
    private itineraryService;
    constructor(itineraryService: ItineraryService);
    getItineraryById(id: string): Promise<void>;
    createAttraction(itinerary: itinerary): Promise<void>;
}
