import { ApiProperty } from "@nestjs/swagger";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class attraction {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    attractionId: string;

    @Column("varchar")
    @ApiProperty()
    attractionName: string;

    @Column("varchar")
    @ApiProperty()
    organisation: string;

    @Column('varchar')
    @ApiProperty()
    about: string;

    @Column()
    @ApiProperty()
    location: number;

    @Column('double')
    @ApiProperty()
    geoLong: number;

    @Column('double')
    @ApiProperty()
    geoLat: number;

    @Column("double")
    @ApiProperty()
    price: number;

    @Column("text")
    @ApiProperty()
    operatingHours: string;

    @Column("text")
    @ApiProperty()
    websiteUrl: string;

    @Column("varchar")
    @ApiProperty()
    contactNumber: string;

    @Column()
    @ApiProperty()
    reviewCount: number;

    @Column()
    @ApiProperty()
    likes: number;
}