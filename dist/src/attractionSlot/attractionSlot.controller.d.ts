import { attractionSlot } from './attractionSlot.entity';
import { attractionSlotService } from './attractionSlot.service';
export declare class attractionSlotController {
    private attractionSlotService;
    constructor(attractionSlotService: attractionSlotService);
    getAllTourGuides(attractionId: string): Promise<void>;
    getAllAttractions(reviewId: string): Promise<void>;
    createDay(attractionSlot: attractionSlot): Promise<void>;
}
