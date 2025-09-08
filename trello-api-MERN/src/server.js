/* eslint-disable no-console */
// Author: TrungQuanDev: https://youtube.com/@trungquandev

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { env } from './config/environment'
import { corsOptions } from '~/config/corsOptions'
import { APIs_V1 } from '~/routes/v1/'

import { CONNECT_DB, GET_DB } from './config/mongodb'

const START_SERVER = () => {
  // Init Express App
  const app = express()

  // Fix Cache from disk from ExpressJS
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
  })

  // Use Cookie
  app.use(cookieParser())

  // Allow CORS: for more info, check here: https://youtu.be/iYgAWJ2Djkw
  app.use(cors(corsOptions))

  // Enable req.body json data
  app.use(express.json())

  // Use Route APIs V1
  app.use('/v1', APIs_V1)


  app.listen(env.LOCAL_DEV_APP_PORT, env.LOCAL_DEV_APP_HOST, () => {
    console.log(`Local DEV: Hello ${env.AUTHOR}, Back-end Server is running successfully at Host: ${env.LOCAL_DEV_APP_HOST} and Port: ${env.LOCAL_DEV_APP_PORT}`)
  })
}

(async () => {
  try {
    // Start Back-end Server
    await CONNECT_DB()
    console.log('Connected to the mongodb!')
    START_SERVER()
    console.log('Starting Server...')
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
