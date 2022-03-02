import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

import { CamerasModule } from './cameras/cameras.module';
import { CamerasController } from './cameras/cameras.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '4849532',
      database: 'apiguard',
      autoLoadEntities: true,
      // synchronize: true,
      // dropSchema: true,
    }),

    UsersModule,
    CamerasModule,
  ],
  controllers: [AppController, UsersController, CamerasController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) { }
}

