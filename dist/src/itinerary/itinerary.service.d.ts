import { Repository } from 'typeorm';
import { itinerary } from './itinerary.entity';
import { HttpService } from '@nestjs/axios';
import { itineraryMLDTO } from './model/itinerary.dto';
import { attractionSlotService } from 'src/attractionSlot/attractionSlot.service';
import { routeService } from 'src/route/route.service';
import { dayService } from 'src/day/day.service';
export declare class ItineraryService {
    private itenaryRepository;
    private httpService;
    private attractionSlotService;
    private routeService;
    private dayService;
    constructor(itenaryRepository: Repository<itinerary>, httpService: HttpService, attractionSlotService: attractionSlotService, routeService: routeService, dayService: dayService);
    getItineraryById(id: any): Promise<void>;
    createItinerary(itinerary: itinerary): Promise<void>;
    generateItinerary(itineraryMLDTO: itineraryMLDTO): Promise<{
        routeId: any;
        numDays: number;
        numAttractions: number;
        days: any[];
    }>;
    private getRandomItem;
    private generateRandomIntegerInRange;
}
