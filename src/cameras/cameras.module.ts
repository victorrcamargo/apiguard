import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CamerasService } from "./cameras.service";
import { Camera } from "./entities/camera.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Camera])],
    providers: [CamerasService],
    exports: [CamerasService],
})

export class CamerasModule { }