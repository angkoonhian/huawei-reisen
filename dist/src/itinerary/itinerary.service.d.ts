import { Repository } from 'typeorm';
import { itinerary } from './itinerary.entity';
export declare class ItineraryService {
    private itenaryRepository;
    constructor(itenaryRepository: Repository<itinerary>);
    getItineraryById(id: any): Promise<void>;
    createItinerary(): Promise<void>;
}
