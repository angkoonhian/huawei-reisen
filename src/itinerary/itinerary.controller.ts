import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';
import { itineraryMLDTO } from './model/itinerary.dto';

@ApiTags('itinerary')
@Controller('itinerary')
export class itineraryController {
    constructor(private itineraryService: ItineraryService) {}

    @Get('/:id')
    @ApiOperation({summary: 'Get User Itinerary'})
    @ApiResponse({ status: 200, description: 'the found record', type: itinerary})
    getItineraryById(@Param('id') id: string) {
        return this.itineraryService.getItineraryById(id);
    }

    @Post('/createItinerary')
    @ApiOperation({ summary: 'Create Itinerary' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: itinerary })
    createAttraction(
        @Body() itinerary: itinerary
    ) {
        return this.itineraryService.createItinerary(itinerary);
    }

    @Post('/generateItinerary')
    @ApiOperation({ summary: 'Generate Itinerary' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: itinerary })
    generateItinerary(
        @Body() itineraryMLDTO: itineraryMLDTO
    ) { 
        return this.itineraryService.generateItinerary(itineraryMLDTO);
    }
}
