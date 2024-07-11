import 'reflect-metadata';
import '@config/di';
import app from '@config/app';
import { dataSource } from "@infrastructure/typeorm/db";
import { APP_PORT } from "@config/env";


dataSource.initialize().then(() => {
    app.listen(APP_PORT, () => {
        console.log(`Server started on port ${APP_PORT}`);
    });
}).catch(error => console.log('TypeORM connection error: ', error));
