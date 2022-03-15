import { ApiProperty } from "@nestjs/swagger";
import { Col } from "antd";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";


@Entity()
export class attractionSlot {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    attractionSlotId: string;

    @Column()
    @ApiProperty()
    tourGuideId: string;

    @Column()
    @ApiProperty()
    dayId: string;

    @Column()
        @ApiProperty()
    attractionId: string;

    @Column()
    @ApiProperty()
    attractionStart: Date;

    @Column()
    @ApiProperty()
    attractionEnd: Date;

    @Column()
    @ApiProperty()
    byPublicDuration: number;

    @Column()
    @ApiProperty()
    byCarDuration: number;

    @Column()
    @ApiProperty()
    byWalkDuration: number;

}