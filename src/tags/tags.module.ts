import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TagsController } from './tags.controller';
import { tagsProvider } from './tags.provider';
import { TagsService } from './tags.service';

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [TagsController],
    providers: [
        ...tagsProvider,
        TagsService,
    ]
})

export class tagsModule {}
