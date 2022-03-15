import { ApiProperty } from "@nestjs/swagger";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";


@Entity()
export class tourGuideAvailability {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    availabilityId: string;

    @Column()
    @ApiProperty()
    tourGuideId: string;

    @Column()
    @ApiProperty()
    timeSlot: Date;

    @Column("text")
    @ApiProperty()
    slotContent: string;

}