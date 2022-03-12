import { ItineraryService } from './itinerary.service';
export declare class ItineraryController {
    private itineraryService;
    constructor(itineraryService: ItineraryService);
    getItineraryById(id: string): any[];
}
