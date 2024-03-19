import { IsUUID } from 'class-validator';

export class Fav {
  @IsUUID('4', { each: true })
  artists: string[]; // favorite artists ids

  @IsUUID('4', { each: true })
  albums: string[]; // favorite albums ids

  @IsUUID('4', { each: true })
  tracks: string[]; // favorite tracks ids

  constructor(partial: Partial<Fav>) {
    Object.assign(this, partial);
  }
}
