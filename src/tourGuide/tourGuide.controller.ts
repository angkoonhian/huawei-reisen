import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { tourGuide } from './tourGuide.entity';
import { tourGuideService } from './tourGuide.service';

@ApiTags('tourGuide')
@Controller('tourGuide')
export class tourGuideController {
    constructor(private tourGuideService: tourGuideService) { }
    
    @Get('/getAllTourGuides')
    @ApiOperation({ summary: 'Get all tour guides' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: tourGuide })
    getAllTourGuides() {
        return this.tourGuideService.getAllTourGuides();
    }
        
    @Get('/:getTourGuideById')
    @ApiOperation({summary: 'Get User Itinerary'})
    @ApiResponse({ status: 200, description: 'the found record', type: tourGuide})
    getAllAttractions(
        @Param('tourGuide id') routeId: string,
    ) {
        return this.tourGuideService.getTourGuideById(routeId);
    }

    @Post('/createTourGuide')
    @ApiOperation({ summary: 'Create tourGuide' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: tourGuide })
    createDay(
        @Body() tourGuide: tourGuide
    ) {
        return this.tourGuideService.createTourGuide(tourGuide);
    }
}