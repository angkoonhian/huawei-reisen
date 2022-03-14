import { user } from 'src/user/user.entity';
import { itinerary } from 'src/itinerary/itinerary.entity';
import { createConnection } from 'typeorm';
import { attraction } from 'src/attraction/attraction.entity';
import { day } from 'src/day/day.entity';
import { route } from 'src/route/route.entity';
import { tag } from 'src/tags/tags.entity';

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
      entities: [user, itinerary, attraction, day, route, tag],
      synchronize: false,
    }),
  },
];