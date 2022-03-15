import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tag {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    tagId: string;

    @Column("varchar")
    @ApiProperty()
    content: string;

    @Column("uuid")
    @ApiProperty()
    attractionId: string;
}
