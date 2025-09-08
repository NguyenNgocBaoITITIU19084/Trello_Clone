import { MongoClient, ServerApiVersion } from 'mongodb'

import { env } from './environment'

let TrelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  TrelloDatabaseInstance = mongoClientInstance.db(env.DB_NAME)
}

export const GET_DB = () => {
  if (!TrelloDatabaseInstance) throw new Error('Please, connect to database first!')
  return TrelloDatabaseInstance
}