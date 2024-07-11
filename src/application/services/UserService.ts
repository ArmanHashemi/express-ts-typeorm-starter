import { inject, injectable } from 'inversify';
import { IUserService } from '@domain/services/IUserService';
import { IUserRepository } from '@domain/repositories/IUserRepository';
import { UserDTO } from '@application/dto/UserDTO';
import { User } from '@domain/models/User';
import { lazyInject } from "@config/container";
import { USER_REPOSITORY } from "@infrastructure/repositories/UserRepository";


@injectable()
export class UserService implements IUserService {

    @lazyInject(USER_REPOSITORY)
    readonly userRepository: IUserRepository

    async getUsers(): Promise<UserDTO[]> {
        const users = await this.userRepository.findAll();
        return users.map(user => new UserDTO(user.id, user.firstName, user.lastName, user.age));
    }

    async createUser(userDto: UserDTO): Promise<UserDTO> {
        const user = new User(userDto.id, userDto.firstName, userDto.lastName, userDto.age);
        const savedUser = await this.userRepository.save(user);
        return new UserDTO(savedUser.id, savedUser.firstName, savedUser.lastName, savedUser.age);
    }
}

export const USER_SERVICE = Symbol('UserService')
