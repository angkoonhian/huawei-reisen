import { Repository } from 'typeorm';
import { day } from './day.entity';
export declare class dayService {
    private attractionRepository;
    constructor(attractionRepository: Repository<day>);
    getRouteDays(routeId: any): Promise<void>;
    createDay(day: day): Promise<void>;
}
