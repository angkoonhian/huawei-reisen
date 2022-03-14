import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { tourGuide } from './tourGuide.entity';

@Injectable()
export class tourGuideService {
    constructor(
        @Inject('TOURGUIDE_REPOSITORY') private tourGuideRepository: Repository<tourGuide>
    ) { }

    public async getAllTourGuides() {
        this.tourGuideRepository.find().then(result => {
            console.log(result);
            return result;
        });
    }
    
    public async getTourGuideById(tourGuideId) {
        this.tourGuideRepository.find({tourGuideId: tourGuideId }).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createTourGuide(tourGuide: tourGuide) {
        this.tourGuideRepository.save(tourGuide).then(result => {
            console.log(result);
            return result;
        });
    }
    
}