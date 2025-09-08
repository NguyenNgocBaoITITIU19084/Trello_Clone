// Author: TrungQuanDev: https://youtube.com/@trungquandev
import express from 'express'
import { dashboardController } from '~/controllers/dashboardController'
import { boardValidation } from '~/validations/boardValidation'

const Router = express.Router()

Router.route('/access')
  .get(dashboardController.access)

Router.route('/')
  .post(boardValidation.createNew)
export const dashboardRoute = Router
