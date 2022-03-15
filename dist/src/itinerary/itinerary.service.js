"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const axios_1 = require("@nestjs/axios");
const attractionSlot_service_1 = require("../attractionSlot/attractionSlot.service");
const route_service_1 = require("../route/route.service");
const day_service_1 = require("../day/day.service");
let ItineraryService = class ItineraryService {
    constructor(itenaryRepository, httpService, attractionSlotService, routeService, dayService) {
        this.itenaryRepository = itenaryRepository;
        this.httpService = httpService;
        this.attractionSlotService = attractionSlotService;
        this.routeService = routeService;
        this.dayService = dayService;
    }
    async getItineraryById(id) {
        this.itenaryRepository.findOne(id).then(result => {
            console.log(result);
            return result;
        });
    }
    async createItinerary(itinerary) {
        itinerary.itineraryId = (0, uuid_1.v4)();
        this.itenaryRepository.save(itinerary).then(result => {
            console.log(result);
            return result;
        });
    }
    async generateItinerary(itineraryMLDTO) {
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
        };
        let nationalityArray = ["singaporean", "american", "british", "japanese", "korean", "chinese", "malaysian", "german", "swede", "russian", "thai", "canadian", "french", "saudi arabian", "indian", "spanish", "mexican", "dutch", "filipino", "vietnamese", "italian"];
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
        ];
        let data = [
            itineraryMLDTO.nationality,
            itineraryMLDTO.age,
            itineraryMLDTO.expectations,
            itineraryMLDTO.numPeople,
            80
        ];
        while (attractions.length < itineraryMLDTO.days * 3) {
            data[0] = this.getRandomItem(nationalityArray);
            data[1] = this.generateRandomIntegerInRange(18, 60);
            data[3] = this.generateRandomIntegerInRange(1, 10);
            let numExpectations = this.generateRandomIntegerInRange(1, 5);
            let expectations = [];
            expectations.pop();
            for (let j = 0; j < numExpectations; j++) {
                let expectationRng = this.generateRandomIntegerInRange(0, 8);
                let expectation = expectationsArray[expectationRng.length];
                if (expectations.includes(expectation)) {
                    continue;
                }
                else {
                    expectations.push(expectation);
                }
            }
            data[2] = expectations;
            let result = await this.httpService.post(url, data, { headers: options.headers }).toPromise();
            console.log(result.data.attractionId.prediction);
            if (attractions.includes(result.data.attractionId.prediction)) {
                continue;
            }
            else {
                attractions.push(result.data.attractionId.prediction);
            }
        }
        let routeId = (0, uuid_1.v4)();
        let route = {
            routeId: routeId,
            numDays: itineraryMLDTO.days,
            numAttractions: attractions.length,
            days: []
        };
        for (let i = 0; i < itineraryMLDTO.days; i++) {
            let dayId = (0, uuid_1.v4)();
            let day = {
                dayId: dayId,
                attractions: []
            };
            for (let j = 0; j < 3; j++) {
                day.attractions.push(attractions.pop());
            }
            route.days[i] = day;
        }
        return route;
    }
    getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }
    generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
ItineraryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ITENARY_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        axios_1.HttpService,
        attractionSlot_service_1.attractionSlotService,
        route_service_1.routeService,
        day_service_1.dayService])
], ItineraryService);
exports.ItineraryService = ItineraryService;
//# sourceMappingURL=itinerary.service.js.map