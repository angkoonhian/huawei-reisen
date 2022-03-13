import { ApiProperty } from "@nestjs/swagger";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { ItineraryStatus, TravelExpectations } from "./itinerary.enum";

@Entity()
export class itinerary {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    itineraryId: string;

    @Column()
    @ApiProperty()
    itineraryStatus: ItineraryStatus;

    @Column("varchar")
    // @ManyToOne(type => user, user => user.userId)
    @ApiProperty()
    userId: string;

    @Column()
    @ApiProperty()
    startDate: Date;

    @Column()
    @ApiProperty()
    endDate: Date;

    @Column()
    @ApiProperty()
    numDays: number;

    @Column()
    @ApiProperty()
    numPeople: number;

    @Column()
    @ApiProperty()
    travelExpectations: string;

    @Column("varchar")
    @ApiProperty()
    chosenRoute: string;
}
