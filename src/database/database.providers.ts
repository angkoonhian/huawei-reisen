import { user } from 'src/user/user.entity';
import { itinerary } from 'src/itinerary/itinerary.entity';
import { createConnection } from 'typeorm';
import { attraction } from 'src/attraction/attraction.entity';
import { day } from 'src/day/day.entity';
import { route } from 'src/route/route.entity';
import { tourGuide } from 'src/tourGuide/tourGuide.entity';
import { review } from 'src/review/review.entity';
import { tourGuideAvailability } from 'src/tourGuideAvailability/tourGuideAvailability.entity';
import { attractionSlot } from 'src/attractionSlot/attractionSlot.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      port: 3306,
      host: '122.9.100.94',
        username: 'root',
      name: 'reisen',
        password: 'Fatfatbee01@261114',
        database: 'reisen',
      entities: [user, itinerary, attraction, day, route, tourGuide, review, tourGuideAvailability, attractionSlot],
      synchronize: false,
    }),
  },
];