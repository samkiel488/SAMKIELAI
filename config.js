const { Sequelize } = require('sequelize');
const { existsSync } = require('fs');
const path = require('path');
const configPath = path.join(__dirname, './config.env');
const databasePath = path.join(__dirname, './database.db');
if (existsSync(configPath)) require('dotenv').config({ path: configPath });
const toBool = (x) => x == 'true';
const DATABASE_URL =
  process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;

module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || 'levanter_SAMKIEL').trim(),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  PREFIX: (process.env.PREFIX || '.').trim(),
  SUDO: process.env.SUDO || '2348087357158',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || ',Ԇ・SAMKIEL',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE,
  RMBG_KEY: process.env.RMBG_KEY || 'jqDMXE7xSVjsV2abyyBkyPYV',
  TIMEZONE: process.env.TIMEZONE || 'Africa/Lagos',
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'no-dl').trim(),
  SEND_READ: process.env.SEND_READ,
  DELETE_TYPE: (process.env.DELETE_TYPE || 'all').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'poll').trim(),
  GROUP_ADMINS: process.env.GROUP_ADMINS || '2348087357158',
  CMD_REACTION: process.env.CMD_REACTION || 'true',
  AUTO_UPDATE: process.env.AUTO_UPDATE || 'true',
  WHITE_LIST: process.env.WHITE_LIST || '',
  BOT_LANG: process.env.BOT_LANG || 'english',
  YT_COOKIE: process.env.YT_COOKIE,
}
  
