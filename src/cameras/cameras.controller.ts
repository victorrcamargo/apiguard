import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { CamerasService } from "./cameras.service";
import { Camera } from "./entities/camera.entity";

@Controller('cameras')
export class CamerasController {
    constructor(
        private camerasService: CamerasService,
    ) { }

    @Get() //get all cameras
    async getAllCameraS() {
        try {
            const cameras = await this.camerasService.findAll();
            return {
                statusCode: HttpStatus.OK,
                cameras
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Erro ao retornar câmeras!'
            }
        }
    }

    @Get(':id') //get camera by id
    async getCameraById(@Param('id') id: number) {
        try {
            const camera = await this.camerasService.findOne(id);
            return {
                statusCode: HttpStatus.OK,
                camera
            }
        } catch (error) {

        }
    }

    @Post() //create camera
    async createCamera(@Body() data: Camera) {
        try {
            await this.camerasService.create(data);
            return {
                statusCode: HttpStatus.OK,
                message: `Camera criada com sucesso!`
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: `Errro ao criar camera, ${error}`
            }
        }
    }

    @Patch(':id') //edit camera
    async updateCamera(@Param('id') id: number, @Body() data: Camera) {
        try {
            await this.camerasService.update(id, data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Camera editada com sucesso!'

            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: `Erro ao atualizar camera, ${error}`
            }
        }
    }

    @Delete('/:id') //delete camera
    async deleteCamera(@Param('id') id: number, @Body() data: Camera) {
        try {
            await this.camerasService.remove(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Camera deletada com sucesso!'
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: `Erro ao deletar camera, ${error}`
            }
        }
    }

}