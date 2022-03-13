import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { day } from './day.entity';
import { dayService } from './day.service';

@ApiTags('day')
@Controller('day')
export class dayController {
    constructor(private dayService: dayService) {}

    @Get('/:routeId')
    @ApiOperation({summary: 'Get User Itinerary'})
    @ApiResponse({ status: 200, description: 'the found record', type: day})
    getAllAttractions(
        @Param('route id') routeId: string,
    ) {
        return this.dayService.getRouteDays(routeId);
    }

    @Post('/createDay')
    @ApiOperation({ summary: 'Create Day' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: day })
    createDay(
        @Body() day: day
    ) {
        return this.dayService.createDay(day);
    }
}