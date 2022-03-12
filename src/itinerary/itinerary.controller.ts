import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { itinerary } from './itinerary.entity';
import { ItineraryService } from './itinerary.service';

@ApiTags('itinerary')
@Controller('itinerary')
export class ItineraryController {
    constructor(private itineraryService: ItineraryService) {}

    @Get('/:id')
    @ApiOperation({summary: 'Get User Itinerary'})
    @ApiResponse({ status: 200, description: 'the found record', type: itinerary})
    getItineraryById(@Param('id') id: string) {
        return [];
        //this.itineraryService.getItineraryById(id);
    }
}
