import { Repository } from 'typeorm';
import { route } from './route.entity';
export declare class routeService {
    private routeRepository;
    constructor(routeRepository: Repository<route>);
    getRoutesByItinerary(itineraryId: any): Promise<void>;
    getRouteDays(routeId: any): Promise<void>;
    createRoute(route: route): Promise<void>;
    deleteRoute(routeId: any): Promise<void>;
}
