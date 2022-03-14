import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { review } from './review.entity';

@Injectable()
export class reviewService {
    constructor(
        @Inject('REVIEW_REPOSITORY') private reviewRepository: Repository<review>
    ) { }

    public async getReviewByAttraction(attractionId) {
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

    public async createReview(review: review) {
        this.reviewRepository.save(review).then(result => {
            console.log(result);
            return result;
        });
    }
    
}