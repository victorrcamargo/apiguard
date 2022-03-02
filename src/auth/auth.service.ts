import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

import { UsersService } from "src/users/users.service";
import { Auth, PhoneAuth } from "../auth/interface/auth.interface";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private authRepository: Repository<Auth>
    ) { }
}