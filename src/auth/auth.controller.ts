import { Controller } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor() {
    }
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<any> {
        return this.findOne(username);
    }
}