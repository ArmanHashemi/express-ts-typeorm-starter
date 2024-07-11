import { User } from '../models/User';

export interface IUserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    save(user: User): Promise<User>;
}
