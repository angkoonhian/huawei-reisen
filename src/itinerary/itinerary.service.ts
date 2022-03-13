import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { itinerary } from './itinerary.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ItineraryService {
    constructor(
        @Inject('ITENARY_REPOSITORY') private itenaryRepository: Repository<itinerary>
    ) { }
    
    public async getItineraryById(id) {
        this.itenaryRepository.findOne(id).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createItinerary(itinerary: itinerary) {
        itinerary.itineraryId = uuidv4();
        this.itenaryRepository.save(itinerary).then(result => {
            console.log(result);
            return result;
        })
    }
}
