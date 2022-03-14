import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { review } from './review.entity';
import { reviewService } from './review.service';

@ApiTags('review')
@Controller('review')
export class reviewController {
    constructor(private reviewService: reviewService) { }
    
    @Get('/:getReviewByAttraction')
    @ApiOperation({ summary: 'Get review by attraction' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: review })
    getAllTourGuides(
        @Param('attractionId') attractionId: string,
    ) {
        return this.reviewService.getReviewByAttraction(attractionId);
    }
        
    @Get('/:getReviewById')
    @ApiOperation({summary: 'Get review by Id'})
    @ApiResponse({ status: 200, description: 'the found record', type: review})
    getAllAttractions(
        @Param('reviewId') reviewId: string,
    ) {
        return this.reviewService.getReviewById(reviewId);
    }

    @Post('/createReview')
    @ApiOperation({ summary: 'Create review' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: review })
    createDay(
        @Body() review: review
    ) {
        return this.reviewService.createReview(review);
    }
}