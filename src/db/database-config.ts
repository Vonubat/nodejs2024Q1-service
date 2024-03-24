import { ConfigModule } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Artist } from '../artist/entities/artist.entity';
import { Album } from '../album/entities/album.entity';
import { Track } from '../track/entities/track.entity';
import { Migration1711301298546 } from './migrations/1711301298546-Migration';

import 'dotenv/config';

ConfigModule.forRoot();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const host = DB_HOST;
const port = Number(DB_PORT);
const username = DB_USER;
const password = DB_PASSWORD;
const database = DB_NAME;
const url = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

console.log('DB_HOST:', host);
console.log('DB_PORT:', port);
console.log('DB_USER:', username);
console.log('DB_PASSWORD:', password);
console.log('DB_NAME:', database);
console.log('URL:', url);

export const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  url,
  entities: [User, Artist, Album, Track],
  migrations: [Migration1711301298546],
  synchronize: false,
  logging: true,
  migrationsRun: true,
};
