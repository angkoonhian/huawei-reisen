import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { tourGuideReview } from './tourGuideReview.entity';

@Injectable()
export class tourGuideReviewService {
    constructor(
        @Inject('TOURGUIDEREVIEW_REPOSITORY') private reviewRepository: Repository<tourGuideReview>
    ) { }

    public async getReviewByTourGuideId(attractionId) {
        this.reviewRepository.find({ attractionId: attractionId}).then(result => {
            console.log(result);
            return result;
        });
    }
    
    public async getReviewById(reviewId) {
        this.reviewRepository.find({reviewId: reviewId }).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createReview(tourGuideReview: tourGuideReview) {
        this.reviewRepository.save(tourGuideReview).then(result => {
            console.log(result);
            return result;
        });
    }
    
}