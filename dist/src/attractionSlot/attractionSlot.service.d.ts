import { Repository } from 'typeorm';
import { attractionSlot } from './attractionSlot.entity';
export declare class attractionSlotService {
    private attractionSlotRepository;
    constructor(attractionSlotRepository: Repository<attractionSlot>);
    getAttractionSlotByDayId(dayId: any): Promise<void>;
    getAttractionSlotById(attractionSlotId: any): Promise<void>;
    createAttractionSlot(attractionSlot: attractionSlot): Promise<void>;
}
