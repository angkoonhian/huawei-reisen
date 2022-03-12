import { ItineraryStatus, TravelExpectations } from "./itinerary.enum";
export declare class itinerary {
    itineraryId: string;
    itineraryStatus: ItineraryStatus;
    userId: string;
    startDate: Date;
    endDate: Date;
    numDays: number;
    numPeople: number;
    travelExpectations: [TravelExpectations];
}
