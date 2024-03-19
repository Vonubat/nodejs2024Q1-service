import { IsInt, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class Album {
  id: string; // uuid v4

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  year: number;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  artistId: string | null; // refers to Artist

  constructor(partial: Partial<Album>) {
    Object.assign(this, partial);
  }
}
