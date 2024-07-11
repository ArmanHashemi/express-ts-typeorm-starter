import {DataSource} from "typeorm";
import ormconfig from "@infrastructure/typeorm/ormconfig";

const dataSource = new DataSource(ormconfig)

export const DATA_SOURCE = Symbol('DataSource')

export { dataSource }
