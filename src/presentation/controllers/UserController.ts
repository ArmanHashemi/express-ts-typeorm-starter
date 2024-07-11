import 'reflect-metadata';
import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { IUserService } from '@domain/services/IUserService';
import { UserDTO } from '@application/dto/UserDTO';
import { lazyInject } from "@config/container";
import { USER_SERVICE } from "@application/services/UserService";

@injectable()
export class UserController {

    @lazyInject(USER_SERVICE)
    readonly userService: IUserService;

    async getUsers(req: Request, res: Response): Promise<void> {
        const users = await this.userService.getUsers();
        res.json(users);
    }

    async createUser(req: Request, res: Response): Promise<void> {
        const userDto = req.body as UserDTO;
        const newUser = await this.userService.createUser(userDto);
        res.json(newUser);
    }
}

export const USER_CONTROLLER =  Symbol('UserController')
