// import { isNotEmpty } from "class-validator";
import { ItineraryStatus, TravelExpectations } from "../itinerary.enum";

export class itineraryDTO {
    itineraryId: string;
    itineraryStatus: ItineraryStatus;
    userId: string;
    startDate: Date;
    endDate: Date;
    numDays: number;
    numPeople: number;
    travelExpectations: [TravelExpectations];
    chosenRoute: string;
}

export class itineraryMLDTO {
    nationality: string;
    age: number;
    expectations: [string];
    numPeople: number;
    days: number;
}