import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Camera } from "./entities/camera.entity";


@Injectable()
export class CamerasService {
    constructor(
        @InjectRepository(Camera)
        private camerasRepository: Repository<Camera>
    ) { }

    async findAll(): Promise<Camera[]> {
        return this.camerasRepository.find();
    }

    async findOne(id: number): Promise<Camera> {
        return this.camerasRepository.findOneOrFail({
            where: {
                id: id,
            },
        });
    }

    async create(camera: Camera): Promise<any> {
        const createCamera = this.camerasRepository.create(camera);
        return this.camerasRepository.save(createCamera);
    }

    async update(id: number, camera: Camera): Promise<any> {
        const updateCamera = await this.camerasRepository.findOneOrFail(id);
        updateCamera.name = camera.name;
        updateCamera.ip = camera.ip;

        return this.camerasRepository.save(updateCamera);
    }

    async remove(id: number): Promise<void> {
        await this.camerasRepository.delete(id);
    }
}