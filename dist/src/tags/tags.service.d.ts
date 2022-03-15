import { Repository } from 'typeorm';
import { tag } from './tags.entity';
export declare class TagsService {
    private tagsRepository;
    constructor(tagsRepository: Repository<tag>);
    getTagsByAttraction(id: string): Promise<void>;
}
