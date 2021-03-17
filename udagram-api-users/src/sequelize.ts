import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';
const c = config.dev;
console.log(`Got here with host ${c.host} looking for database ${c.database}`)
export const sequelize = new Sequelize({
  'username': c.username,
  'password': c.password,
  'database': c.database,
  'host': c.host,

  'dialect': c.dialect,
  'storage': ':memory:',
});
