import { Repository } from 'typeorm';
import { attraction } from './attraction.entity';
export declare class attractionService {
    private attractionRepository;
    constructor(attractionRepository: Repository<attraction>);
    getAllAttractions(): Promise<void>;
    getAttractionsById(id: string): Promise<void>;
    createAttraction(attraction: attraction): Promise<void>;
}
