import { Module } from '@nestjs/common';
import { getConnectionToken, TypeOrmModule } from '@nestjs/typeorm';
import { user } from './user.entity';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { Connection } from 'typeorm';
import { userProviders } from './user.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        DatabaseModule,
        // JwtModule.register({
        // secret: process.env.JWT_SECRET,
        // signOptions: { expiresIn: '' },
        // }),
    ],
    controllers: [userController],
    providers: [
        ...userProviders,
        UserService,
    ],
})

export class userModule {}