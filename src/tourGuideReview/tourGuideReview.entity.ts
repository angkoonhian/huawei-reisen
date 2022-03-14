import { ApiProperty } from "@nestjs/swagger";
import { Col } from "antd";
import { user } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";


@Entity()
export class tourGuideReview {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    reviewId: string;

    @Column()
    @ApiProperty()
    attractionId: string;

    @Column("text")
    @ApiProperty()
    content: string;

    @Column("int")
    @ApiProperty()
    rating: number;

    @Column("varchar")
    @ApiProperty()
    reviewBy: string;
}