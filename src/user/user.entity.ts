import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class user {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    userId: string;

    @Column("varchar")
    @ApiProperty()
    name: string;

    @Column("varchar")
    @ApiProperty()
    nationality: string;

    @Column("varchar")
    @ApiProperty()
    password: string;

    @Column()
    @ApiProperty()
    age: number;

    @Column("varchar")
    @ApiProperty()
    interest: string;

    @Column("varchar")
    @ApiProperty()
    currentItenary: string;
}