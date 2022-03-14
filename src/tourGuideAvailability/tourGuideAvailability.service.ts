import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { tourGuideAvailability } from './tourGuideAvailability.entity';

@Injectable()
export class tourGuideAvailabilityService {
    constructor(
        @Inject('TOURGUIDEAVAILABILITY_REPOSITORY') private tourGuideAvailabilityRepository: Repository<tourGuideAvailability>
    ) { }

    public async getReviewByTourGuideId(tourGuideId) {
        this.tourGuideAvailabilityRepository.find({ tourGuideId: tourGuideId}).then(result => {
            console.log(result);
            return result;
        });
    }
    
    public async getReviewById(availabilityId) {
        this.tourGuideAvailabilityRepository.find({availabilityId: availabilityId }).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createTourGuideAvailability(tourGuideAvailability: tourGuideAvailability) {
        this.tourGuideAvailabilityRepository.save(tourGuideAvailability).then(result => {
            console.log(result);
            return result;
        });
    }
    
}