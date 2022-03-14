import { ApiProperty } from "@nestjs/swagger";
import { Col } from "antd";
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
    // @ManyToOne(type => user, user => user.userId)
    @ApiProperty()
    organisation: string;

    @Column('varchar')
    @ApiProperty()
    about: string;

    @Column('varchar')
    @ApiProperty()
    tags: string;

    @Column()
    @ApiProperty()
    location: number;

    @Column('double')
    @ApiProperty()
    geoLong: number;

    @Column('double')
    @ApiProperty()
    geoLat: number;

    @Column("text")
    @ApiProperty()
    imageUrls: string;

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