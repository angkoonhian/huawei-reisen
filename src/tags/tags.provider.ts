import { Connection } from "typeorm";
import { tag } from './tags.entity';

export const tagsProvider = [
    {
        provide: 'TAGS_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(tag),
        inject: ['DATABASE_CONNECTION'],
    }
]
