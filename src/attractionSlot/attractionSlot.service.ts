import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { attractionSlot } from './attractionSlot.entity';

@Injectable()
export class attractionSlotService {
    constructor(
        @Inject('ATTRACTIONSLOT_REPOSITORY') private attractionSlotRepository: Repository<attractionSlot>
    ) { }

    public async getAttractionSlotByDayId(dayId) {
        this.attractionSlotRepository.find({ dayId: dayId }).then(result => {
            console.log(result);
            return result;
        });
    }
    
    public async getAttractionSlotById(attractionSlotId) {
        this.attractionSlotRepository.find({ attractionSlotId: attractionSlotId }).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createAttractionSlot(attractionSlot: attractionSlot) {
        this.attractionSlotRepository.save(attractionSlot).then(result => {
            console.log(result);
            return result;
        });
    }

}
    