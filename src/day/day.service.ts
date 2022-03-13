import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { day } from './day.entity';

@Injectable()
export class dayService {
    constructor(
        @Inject('DAY_REPOSITORY') private attractionRepository: Repository<day>
    ) { }
    
    public async getRouteDays(routeId) {
        this.attractionRepository.find({ routeId: routeId }).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createDay(day: day) {
        this.attractionRepository.save(day).then(result => {
            console.log(result);
            return result;
        });
    }
    
}