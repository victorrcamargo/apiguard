import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }


    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return this.usersRepository.findOneOrFail({
            where: {
                id: id,
            },
        });
    }

    async create(user: User): Promise<any> {
        const createUser = this.usersRepository.create(user);
        return this.usersRepository.save(createUser);
    }

    async update(id: number, user: User): Promise<any> {
        const updateUser = await this.usersRepository.findOneOrFail(id);

        updateUser.name = user.name;
        updateUser.email = user.email;
        updateUser.password = user.password;
        updateUser.number = user.number;

        return this.usersRepository.save(updateUser);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
