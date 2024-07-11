import {inject, injectable} from 'inversify';
import { Repository, DataSource } from 'typeorm';
import { UserEntity } from '../typeorm/entities/UserEntity';
import { IUserRepository } from '@domain/repositories/IUserRepository';
import { User } from '@domain/models/User';
import {DATA_SOURCE} from "@infrastructure/typeorm/db";

@injectable()
export class UserRepository implements IUserRepository {

    private repository: Repository<UserEntity>;

    constructor(@inject(DATA_SOURCE) readonly dataSource: DataSource) {
        this.repository = dataSource.getRepository(UserEntity);
    }

    async findAll(): Promise<User[]> {
        const userEntities = await this.repository.find();
        return userEntities.map(
            entity => new User(entity.id, entity.firstName, entity.lastName, entity.age)
        );
    }

    async findById(id: number): Promise<User | null> {
        const entity = await this.repository.findOne({ where: { id } });
        if (!entity) return null;
        return new User(entity.id, entity.firstName, entity.lastName, entity.age);
    }

    async save(user: User): Promise<User> {
        const entity = this.repository.create(user);
        const savedEntity = await this.repository.save(entity);
        return new User(savedEntity.id, savedEntity.firstName, savedEntity.lastName, savedEntity.age);
    }
}

export const USER_REPOSITORY = Symbol('UserRepository')
