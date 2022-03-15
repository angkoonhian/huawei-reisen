import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { itinerary } from './itinerary.entity';
import { v4 as uuidv4 } from 'uuid';
import { HttpService } from '@nestjs/axios';
import { itineraryMLDTO } from './model/itinerary.dto';
import { attractionSlotService } from 'src/attractionSlot/attractionSlot.service';
import { routeService } from 'src/route/route.service';
import { dayService } from 'src/day/day.service';

@Injectable()
export class ItineraryService {
    constructor(
        @Inject('ITENARY_REPOSITORY') private itenaryRepository: Repository<itinerary>,
        private httpService: HttpService,
        private attractionSlotService: attractionSlotService,
        private routeService: routeService,
        private dayService: dayService
    ) { }
    
    
    public async getItineraryById(id) {
        this.itenaryRepository.findOne(id).then(result => {
            console.log(result);
            return result;
        });
    }

    public async createItinerary(itinerary: itinerary) {
        itinerary.itineraryId = uuidv4();
        this.itenaryRepository.save(itinerary).then(result => {
            console.log(result);
            return result;
        })
    }

    public async generateItinerary(itineraryMLDTO: itineraryMLDTO) {
        let url = 'https://ep-bf32679a-a168-4208-bd9e-170bd732e545.serving.hc.aiaengine.net/invocations';
        const options = {
            hostname: 'https://ep-bf32679a-a168-4208-bd9e-170bd732e545.serving.hc.aiaengine.net',
            port: 443,
            path: '/invocations',
            method: 'POST',
            headers: {
                'Content-Type': 'text/csv',
                'X-API-Key': 'iit3UvESmS97SUv3aajOQ1CSSW83NEXQ',
            }
        }
        let nationalityArray = ["singaporean", "american", "british", "japanese", "korean", "chinese", "malaysian", "german", "swede","russian","thai","canadian","french", "saudi arabian", "indian", "spanish", "mexican", "dutch", "filipino", "vietnamese", "italian"];
        let attractions = [];
        let expectationsArray = [
            "FAMILY",
            "COUPLE",
            "KIDS",
            "FOODIE",
            "ADVENTURAL",
            "CULTURAL",
            "SPORTY",
            "CASUAL",
            "MUSEUM"
        ]
        let data = [
            itineraryMLDTO.nationality,
            itineraryMLDTO.age,
            itineraryMLDTO.expectations,
            itineraryMLDTO.numPeople,
            80
        ]
        while (attractions.length < itineraryMLDTO.days * 3) {
            data[0] = this.getRandomItem(nationalityArray);
            data[1] = this.generateRandomIntegerInRange(18, 60);
            data[3] = this.generateRandomIntegerInRange(1, 10);
            let numExpectations = this.generateRandomIntegerInRange(1, 5);
            let expectations = [];
            expectations.pop();
            for (let j = 0; j < numExpectations; j++) {
                let expectationRng = this.generateRandomIntegerInRange(0, 8);
                let expectation = expectationsArray[expectationRng.length]
                if (expectations.includes(expectation)){
                    continue;
                } else {
                    expectations.push(expectation);
                }
            }
            data[2] = expectations as [string];
            let result = await this.httpService.post(url, data, { headers: options.headers }).toPromise();
            console.log(result.data.attractionId.prediction);
            if (attractions.includes(result.data.attractionId.prediction)) {
                continue;
            } else {
                attractions.push(result.data.attractionId.prediction);
            }
        }

        let routeId = uuidv4()

        let route = {
            routeId: routeId,
            numDays: itineraryMLDTO.days,
            numAttractions: attractions.length,
            days: []
        };

        for (let i = 0; i < itineraryMLDTO.days; i++) {
            let dayId = uuidv4();
            let day = {
                dayId: dayId,
                attractions: []
            }
            for (let j = 0; j < 3; j++) {
                day.attractions.push(attractions.pop());
            }
            route.days[i] = day;
        }
        
        return route;
    }

    // Helper function random item from an array

    private getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];

        return item;
    }

    private generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
