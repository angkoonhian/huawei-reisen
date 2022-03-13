import { day } from './day.entity';
import { dayService } from './day.service';
export declare class dayController {
    private dayService;
    constructor(dayService: dayService);
    getAllAttractions(routeId: string): Promise<void>;
    createDay(day: day): Promise<void>;
}
