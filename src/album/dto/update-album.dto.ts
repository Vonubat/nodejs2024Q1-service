import { OmitType } from '@nestjs/swagger';
import { Album } from '../entities/album.entity';

// export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {}
export class UpdateAlbumDto extends OmitType(Album, ['id'] as const) {}
