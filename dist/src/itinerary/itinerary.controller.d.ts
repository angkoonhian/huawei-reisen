import { itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';
import { itineraryMLDTO } from './model/itinerary.dto';
export declare class itineraryController {
    private itineraryService;
    constructor(itineraryService: ItineraryService);
    getItineraryById(id: string): Promise<void>;
    createAttraction(itinerary: itinerary): Promise<void>;
    generateItinerary(itineraryMLDTO: itineraryMLDTO): Promise<{
        routeId: any;
        numDays: number;
        numAttractions: number;
        days: any[];
    }>;
}
