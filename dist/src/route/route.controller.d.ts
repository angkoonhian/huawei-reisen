import { route } from './route.entity';
import { routeService } from './route.service';
export declare class routeController {
    private routeService;
    constructor(routeService: routeService);
    getAllAttractions(itineraryId: string): Promise<void>;
    createRoute(route: route): Promise<void>;
}
