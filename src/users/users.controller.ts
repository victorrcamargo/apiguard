import { Body, Controller, Delete, Get, HttpStatus, Param, Put, Post } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) { }

    @Get()
    async getAllUsers() {
        const users = await this.usersService.findAll();
        return {
            statusCode: HttpStatus.OK,
            message: 'Usuários retornados com sucesso, RECEBA!',
            users
        }
    }

    @Post()
    async create(@Body() data: User) {
        try {
            await this.usersService.create(data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Usuário criado com sucesso!',
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Erro ao criar usuário!',
            }
        }
    }

    @Get(':id')
    async getUserById(@Param('id') id: number) {
        try {
            const user = await this.usersService.findOne(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Usuário retornado com sucesso!',
                user
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Erro ao retornar usuário!',
            }
        }
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() data: User) {
        try {
            await this.usersService.update(id, data);
            return {
                statusCode: HttpStatus.OK,
                message: 'Usuário atualizado com sucesso!',
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Erro ao atualizar usuário!',
            }
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        try {
            await this.usersService.remove(id);
            return {
                statusCode: HttpStatus.OK,
                message: 'Usuário deletado com sucesso!',
            }
        } catch (error) {
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: 'Erro ao deletar usuário!',
            }
        }
    }

}
