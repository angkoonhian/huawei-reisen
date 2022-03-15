import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { attractionSlot } from './attractionSlot.entity';
import { attractionSlotService } from './attractionSlot.service';

@ApiTags('attractionSlot')
@Controller('attractionSlot')
export class attractionSlotController {
    constructor(private attractionSlotService: attractionSlotService) { }
    
    @Get('/:getAttractionSlotByDay')
    @ApiOperation({ summary: 'Get attraction slot by day' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: attractionSlot })
    getAllTourGuides(
        @Param('attractionId') attractionId: string,
    ) {
        return this.attractionSlotService.getAttractionSlotByDayId(attractionId);
    }
        
    @Get('/:getAttractionSlotById')
    @ApiOperation({summary: 'Get attraction Slot by Id'})
    @ApiResponse({ status: 200, description: 'the found record', type: attractionSlot})
    getAllAttractions(
        @Param('reviewId') reviewId: string,
    ) {
        return this.attractionSlotService.getAttractionSlotById(reviewId);
    }

    @Post('/createtourGuideAvailability')
    @ApiOperation({ summary: 'Create tourGuideAvailability' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: attractionSlot })
    createDay(
        @Body() attractionSlot: attractionSlot
    ) {
        return this.attractionSlotService.createAttractionSlot(attractionSlot);
    }
}