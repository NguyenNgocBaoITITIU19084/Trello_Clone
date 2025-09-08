// Author: TrungQuanDev: https://youtube.com/@trungquandev
import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const access = async (req, res) => {
  try {
    const user = { email: 'trungquandev.official@gmail.com' }

    res.status(StatusCodes.OK).json(user)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
  }
}

const createNew = async (req, res) => {
  try {
    console.log('req.body', req.body)
    console.log('req.query', req.query)
    console.log('req.params', req.params)
    console.log('req.files', req.files)
    console.log('req.jwtDecoded', req.jwtDecoded)
    console.log('req.cookies', req.cookies)

    const createdBoard = await boardService.createNew(req.body)

    res.status(StatusCodes.OK).json(createdBoard)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: error.message })
  }
}

export const dashboardController = {
  access, createNew
}
