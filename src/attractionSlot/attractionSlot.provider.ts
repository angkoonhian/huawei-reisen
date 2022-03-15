import { Connection } from 'typeorm';
import { attractionSlot } from './attractionSlot.entity';

export const attractionSlotProviders = [
    {
        provide: 'ATTRACTIONSLOT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(attractionSlot),
        inject: ['DATABASE_CONNECTION'],
    }
]