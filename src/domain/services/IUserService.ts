import { UserDTO } from '@application/dto/UserDTO';

export interface IUserService {
    getUsers(): Promise<UserDTO[]>;
    createUser(userDto: UserDTO): Promise<UserDTO>;
}
