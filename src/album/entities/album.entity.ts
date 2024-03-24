import { Exclude } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid v4

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsInt()
  year: number;

  @Column({ nullable: true })
  @IsString()
  @ValidateIf((object, value) => value !== null)
  artistId: string | null; // refers to Artist

  @Exclude()
  @Column({ default: false })
  isFavorite: boolean;
}
