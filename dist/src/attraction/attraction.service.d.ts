import { Repository } from 'typeorm';
import { attraction } from './attraction.entity';
export declare class attractionService {
    private attractionRepository;
    constructor(attractionRepository: Repository<attraction>);
    getAllAttractions(): Promise<attraction[]>;
    getAttractionsById(id: string): Promise<attraction>;
    createAttraction(attraction: attraction): Promise<void>;
}
