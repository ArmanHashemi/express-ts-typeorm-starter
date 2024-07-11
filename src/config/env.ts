import { config as dotenvConfig } from 'dotenv';
import * as process from "process";
dotenvConfig();

const parseEnvNumber = (envVar: string | undefined, defaultValue: number): number => {
    if (!envVar) {
        return defaultValue;
    }
    const parsed = parseInt(envVar, 10);
    if (isNaN(parsed)) {
        return defaultValue;
    }
    return parsed;
};

export const APP_PORT = parseEnvNumber(process.env.PORT , 3000)
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = parseEnvNumber(process.env.DB_PORT,3306)
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
