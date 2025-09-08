import { slugify } from '~/utils/slugify'

const createNew = async ( body ) => {
  const newBoard = { ...body, slug: slugify(body.title) }
  return newBoard
}

export const boardService = {
  createNew
}