import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { route } from './route.entity';
import { routeService } from './route.service';

@ApiTags('route')
@Controller('route')
export class routeController {
    constructor(private routeService: routeService) {}

    @Get('/:itineraryId')
    @ApiOperation({summary: 'Get route by itinerary'})
    @ApiResponse({ status: 200, description: 'the found record', type: route})
    getAllAttractions(
        @Param('itineraryId') itineraryId: string,
    ) {
        return this.routeService.getRoutesByItinerary(itineraryId);
    }

    @Post('/createRoute')
    @ApiOperation({ summary: 'Create Route' })
    @ApiResponse({ status: 200, description: 'The record has been successfully created.', type: route })
    createRoute(
        @Body() route: route
    ) {
        return this.routeService.createRoute(route);
    }

    @Delete('/deleteRoute')
    @ApiOperation({ summary: 'Delete Route' })
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.', type: route })
    deleteRoute(
        @Body() routeId: string
    ) {
        return this.routeService.deleteRoute(routeId);
    }

}