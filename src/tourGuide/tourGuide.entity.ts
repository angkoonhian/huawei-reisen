import { ApiProperty } from "@nestjs/swagger";
import { Col } from "antd";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";


@Entity()
export class tourGuide {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    tourGuideId: string;

    @Column("text")
    @ApiProperty()
    guideProfile: string;

    @Column("varchar")
    @ApiProperty()
    name: string;

    @Column("varchar")
    @ApiProperty()
    contactEmail: string;

    @Column("varchar")
    @ApiProperty()
    contactNumber: string;

    @Column("varchar")
    @ApiProperty()
    nationality: string;

    @Column("int")
    @ApiProperty()
    age: number;

    @Column("text")
    @ApiProperty()
    about: string;

    @Column("boolean")
    @ApiProperty()
    certified: boolean;

    @Column("int")
    @ApiProperty()
    rating: number;

    @Column("double")
    @ApiProperty()
    price: number;
}