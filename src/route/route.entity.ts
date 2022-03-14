import { ApiProperty } from "@nestjs/swagger";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";


@Entity()
export class route {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    routeId: string;

    @Column("varchar")
    @ApiProperty()
    itineraryId: string;

    @Column()
    @ApiProperty()
    numDays: number;

    @Column()
    @ApiProperty()
    numAttractions: number;
}