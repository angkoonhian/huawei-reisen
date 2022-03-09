import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    userId: number;

    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    nationality: string;

    @Column()
    @ApiProperty()
    password: string;

    @Column()
    @ApiProperty()
    age: number;

    @Column()
    @ApiProperty()
    interest: [string];

    @Column()
    @ApiProperty()
    currentItenary: string;
}