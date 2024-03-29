import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Track } from './entities/track.entity';
import { v4 as uuidv4 } from 'uuid';
import { map, selectFromMap } from '../utils/common';

@Injectable()
export class TrackService {
  private readonly trackRepository: Track[] = [];

  create(dto: CreateTrackDto): Track {
    const { name, albumId, artistId, duration } = dto;

    const newTrack = new Track({
      id: uuidv4(),
      name,
      albumId,
      artistId,
      duration,
    });

    this.trackRepository.push(newTrack);
    return newTrack;
  }

  findAll(): Track[] {
    return this.trackRepository;
  }

  findOne(id: string, status = HttpStatus.NOT_FOUND) {
    const track = this.trackRepository.find((it) => it.id === id);

    if (!track) {
      throw new HttpException(
        {
          status,
          error: `Track with such id = ${id} does not exist`,
        },
        status,
      );
    }

    return track;
  }

  findMany(ids: string[]): Track[] {
    const trackMap = map(this.trackRepository, (it) => it.id);
    return selectFromMap(ids, trackMap);
  }

  update(id: string, dto: UpdateTrackDto): Track {
    const { name, albumId, artistId, duration } = dto;
    const track = this.findOne(id);

    track.name = name;
    track.albumId = albumId;
    track.artistId = artistId;
    track.duration = duration;

    return track;
  }

  remove(id: string): void {
    const track = this.findOne(id);
    const index = this.trackRepository.findIndex((it) => it.id === track.id);
    this.trackRepository.splice(index, 1);
  }

  invalidateAlbum(albumId: string): void {
    this.trackRepository.forEach((it) => {
      if (it.albumId === albumId) {
        it.albumId = null;
      }
    });
  }

  invalidateArtist(artistId: string): void {
    this.trackRepository.forEach((it) => {
      if (it.artistId === artistId) {
        it.artistId = null;
      }
    });
  }
}
