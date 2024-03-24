import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Artist extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid v4

  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @IsBoolean()
  @Column()
  grammy: boolean;
}
