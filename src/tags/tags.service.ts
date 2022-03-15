import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { tag } from './tags.entity';

@Injectable()
export class TagsService {
    constructor(
        @Inject('TAGS_REPOSITORY') private tagsRepository: Repository<tag>
    ) {}
    
    public async getTagsByAttraction(id: string) {
        this.tagsRepository.findByIds([id]).then(res => {
            console.log(res);
            return res;
        })
    }
}
