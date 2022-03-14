import { ApiProperty } from "@nestjs/swagger";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";


@Entity()
export class day {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    dayId: string;

    @Column("varchar")
    @ApiProperty()
    routeId: string;
}