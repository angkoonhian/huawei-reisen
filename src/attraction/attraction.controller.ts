import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { attraction } from './attraction.entity';
import { attractionService } from './attraction.service';

@ApiTags('attraction')
@Controller('attraction')
export class attractionController {
    constructor(private attractionService: attractionService) {}

    @Get('/:id')
    @ApiOperation({summary: 'Get User Itinerary'})
    @ApiResponse({ status: 200, description: 'the found record', type: attraction})
    getAllAttractions() {
        return this.attractionService.getAllAttractions();
    }

    @Post('/createAttraction')
    @ApiOperation({ summary: 'Create Attraction' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: attraction })
    createAttraction(
        @Body() attraction: attraction
    ) {
        return this.attractionService.createAttraction(attraction);
    }
}