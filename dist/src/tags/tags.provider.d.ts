import { Connection } from "typeorm";
import { tag } from './tags.entity';
export declare const tagsProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<tag>;
    inject: string[];
}[];
