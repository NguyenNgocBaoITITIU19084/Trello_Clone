// import 'dotenv/config'

import dotenv from 'dotenv'
import path from 'path'

dotenv.config(path.join(__dirname, '/..', '/.env'))

export const env = {
  LOCAL_DEV_APP_PORT: process.env.LOCAL_DEV_APP_PORT,
  LOCAL_DEV_APP_HOST: process.env.LOCAL_DEV_APP_HOST,

  MONGO_URI: process.env.MONGO_URI,
  DB_NAME: process.env.DB_NAME,

  BUILD_MODE: process.env.BUILD_MODE,

  AUTHOR: process.env.AUTHOR
}