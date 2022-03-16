import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { attraction } from './attraction.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class attractionService {
    constructor(
        @Inject('ATTRACTION_REPOSITORY') private attractionRepository: Repository<attraction>
    ) { }
    
    public async getAllAttractions() {
        const res = await this.attractionRepository.find().then(result => {
            try {
                //console.log(result);
                return result;
            } catch (error) {
                throw error;
            }
        });
        return res;
    }

    public async getAttractionsById(id: string) {
        const res = await this.attractionRepository.findOne({attractionId: id}).then(res => {
            try {
                console.log(res);
                return res;
            } catch (err) {
                throw err
            }
        })
        return res;
    } 

    public async createAttraction(attraction: attraction) {
        attraction.attractionId = uuidv4();
        this.attractionRepository.save(attraction).then(result => {
            console.log(result);
            return result;
        });
    }
}
