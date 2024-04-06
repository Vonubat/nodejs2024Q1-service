import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Track extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid v4

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ nullable: true })
  @IsString()
  @ValidateIf((object, value) => value !== null)
  artistId: string | null; // refers to Artist

  @Column({ nullable: true })
  @IsString()
  @ValidateIf((object, value) => value !== null)
  albumId: string | null; // refers to Album

  @Column()
  @IsNumber()
  duration: number; // integer number

  @Exclude()
  @Column({ default: false })
  isFavorite: boolean;
}
