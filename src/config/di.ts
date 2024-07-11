import 'reflect-metadata';
import { container } from "@config/container";
import {USER_REPOSITORY, UserRepository} from '@infrastructure/repositories/UserRepository';
import { IUserRepository } from '@domain/repositories/IUserRepository';
import {USER_SERVICE, UserService} from '@application/services/UserService';
import { IUserService } from '@domain/services/IUserService';
import { USER_CONTROLLER, UserController} from '@presentation/controllers/UserController';
import { ContainerModule } from "inversify";
import { DataSource } from "typeorm";
import { DATA_SOURCE, dataSource } from "@infrastructure/typeorm/db";



const userDependency = new ContainerModule((bind) => {
    bind<DataSource>(DATA_SOURCE).toConstantValue(dataSource);
    bind<IUserService>(USER_SERVICE).to(UserService);
    bind<IUserRepository>(USER_REPOSITORY).to(UserRepository);
    bind<UserController>(USER_CONTROLLER).to(UserController).inSingletonScope();
})

container.load(userDependency)


export { container };
