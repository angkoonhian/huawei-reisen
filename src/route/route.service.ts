import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { route } from './route.entity';

@Injectable()
export class routeService {
    constructor(
        @Inject('ROUTE_REPOSITORY') private routeRepository: Repository<route>
    ) { }

    public async getRoutesByItinerary(itineraryId) {
        this.routeRepository.find({ itineraryId: itineraryId }).then(result => {
            console.log(result);
            return result;
        });
    }
    
    public async getRouteDays(routeId) {
        this.routeRepository.find({ routeId: routeId }).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createRoute(route: route) {
        this.routeRepository.save(route).then(result => {
            console.log(result);
            return result;
        });
    }
}