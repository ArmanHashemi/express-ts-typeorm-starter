import { DataSourceOptions } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "@config/env";

const ormconfig: DataSourceOptions = {
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/entities/**/*.{ts,js}`],
    migrations: [`${__dirname}/migration/**/*.{ts,js}`],
    subscribers: [`${__dirname}/subscriber/**/*.{ts,js}`],

};
export default ormconfig;
