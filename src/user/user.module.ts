import { Module } from '@nestjs/common';
import { getConnectionToken, TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { Connection } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            user,
        ], 'reisen')
    ],
    controllers: [userController],
    providers: [
        UserService,
    ],
})

export class userModule {}