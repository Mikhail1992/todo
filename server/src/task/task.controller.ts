import { Request, Response, NextFunction } from 'express'
import ITaskController from './task.controller.interface'
import ITaskService from './task.service.interface'
import BaseController from '../common/base-controller'

export default class TaskController
  extends BaseController
  implements ITaskController
{
  taskService: ITaskService

  constructor(taskService: ITaskService) {
    super()
    this.taskService = taskService

    this.bindRoutes([
      {
        path: '/',
        method: 'post',
        func: this.create
      },
      {
        path: '/',
        method: 'get',
        func: this.findAll
      },
      {
        path: '/:id',
        method: 'patch',
        func: this.update
      },
      {
        path: '/:id',
        method: 'delete',
        func: this.delete
      }
    ])
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body
      const result = await this.taskService.create(data)

      res.status(201).send(result)
    } catch (err) {
      next(err)
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.taskService.findAll()
      res.send(result)
    } catch (err) {
      next(err)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const data = req.body
      const result = await this.taskService.update(id, data)

      res.send(result)
    } catch (err) {
      next(err)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id
      const result = await this.taskService.delete(id)

      res.send(result)
    } catch (err) {
      next(err)
    }
  }
}
