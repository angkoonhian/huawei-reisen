import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { tourGuideReview } from './tourGuideReview.entity';
import { tourGuideReviewService } from './tourGuideReview.service';

@ApiTags('tourGuideReview')
@Controller('tourGuideReview')
export class tourGuideReviewController {
    constructor(private tourGuideReviewService: tourGuideReviewService) { }
    
    @Get('/:getReviewByTourGuide')
    @ApiOperation({ summary: 'Get review by attraction' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: tourGuideReview })
    getAllTourGuides(
        @Param('tourGuideId') tourGuideId: string,
    ) {
        return this.tourGuideReviewService.getReviewByTourGuideId(tourGuideId);
    }
        
    @Get('/:getReviewById')
    @ApiOperation({summary: 'Get review by Id'})
    @ApiResponse({ status: 200, description: 'the found record', type: tourGuideReview})
    getAllAttractions(
        @Param('reviewId') reviewId: string,
    ) {
        return this.tourGuideReviewService.getReviewById(reviewId);
    }

    @Post('/createReview')
    @ApiOperation({ summary: 'Create review' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: tourGuideReview })
    createDay(
        @Body() tourGuideReview: tourGuideReview
    ) {
        return this.tourGuideReviewService.createReview(tourGuideReview);
    }
}