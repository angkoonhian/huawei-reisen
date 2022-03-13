import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { attraction } from './attraction.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class attractionService {
    constructor(
        @Inject('ATTRACTION_REPOSITORY') private attractionRepository: Repository<attraction>
    ) { }
    
    public async getAllAttractions() {
        this.attractionRepository.find().then(result => {
            console.log(result);
            return result;
        });
    }

    public async createAttraction(attraction: attraction) {
        attraction.attractionId = uuidv4();
        this.attractionRepository.save(attraction).then(result => {
            console.log(result);
            return result;
        });
    }
}
