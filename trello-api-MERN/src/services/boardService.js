/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/slugify'

const createNew = async ( body ) => {
  try {
    const newBoard = { ...body, slug: slugify(body.title) }
    return newBoard
  } catch (error) { throw error }
}

export const boardService = {
  createNew
}