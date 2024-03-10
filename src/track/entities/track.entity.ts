import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

export class Track {
  id: string; // uuid v4

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @ValidateIf((object, value) => value !== null)
  artistId: string | null; // refers to Artist

  @IsString()
  @ValidateIf((object, value) => value !== null)
  albumId: string | null; // refers to Album

  @IsNumber()
  duration: number; // integer number

  constructor(partial: Partial<Track>) {
    Object.assign(this, partial);
  }
}
