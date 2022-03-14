import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { tourGuideAvailability } from './tourGuideAvailability.entity';
import { tourGuideAvailabilityService } from './tourGuideAvailability.service';

@ApiTags('tourGuideAvailability')
@Controller('tourGuideAvailability')
export class tourGuideAvailabilityController {
    constructor(private tourGuideAvailabilityService: tourGuideAvailabilityService) { }
    
    @Get('/:getReviewByAttraction')
    @ApiOperation({ summary: 'Get review by attraction' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: tourGuideAvailability })
    getAllTourGuides(
        @Param('attractionId') attractionId: string,
    ) {
        return this.tourGuideAvailabilityService.getReviewByTourGuideId(attractionId);
    }
        
    @Get('/:getReviewById')
    @ApiOperation({summary: 'Get review by Id'})
    @ApiResponse({ status: 200, description: 'the found record', type: tourGuideAvailability})
    getAllAttractions(
        @Param('reviewId') reviewId: string,
    ) {
        return this.tourGuideAvailabilityService.getReviewById(reviewId);
    }

    @Post('/createtourGuideAvailability')
    @ApiOperation({ summary: 'Create tourGuideAvailability' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: tourGuideAvailability })
    createDay(
        @Body() tourGuideAvailability: tourGuideAvailability
    ) {
        return this.tourGuideAvailabilityService.createTourGuideAvailability(tourGuideAvailability);
    }
}