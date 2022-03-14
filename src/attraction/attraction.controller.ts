import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagsService } from 'src/tags/tags.service';
import { attraction } from './attraction.entity';
import { attractionService } from './attraction.service';

@ApiTags('attraction')
@Controller('attraction')
export class attractionController {
    constructor(private attractionService: attractionService, private tagsServie: TagsService) {}

    @Get('/getAllAttractions')
    @ApiOperation({summary: 'Get one attraction'})
    @ApiResponse({ status: 200, description: 'the found record', type: attraction})
    getAllAttractions() {
        const attraction = this.attractionService.getAllAttractions();
        console.log(attraction);
        return attraction;
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