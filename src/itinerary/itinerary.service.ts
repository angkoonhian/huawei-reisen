import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { itinerary } from './itinerary.entity';

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

    public async createItinerary() {
    }
}
