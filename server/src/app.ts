import express, { Express, NextFunction, Request, Response } from 'express'
import { Server } from 'http'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import ITaskController from './task/task.controller.interface'

const PORT = 3001
export default class App {
  app: Express
  server: Server
  taskController: ITaskController

  constructor(taskController: ITaskController) {
    this.app = express()
    this.taskController = taskController
  }

  useMiddleware(): void {
    this.app.use(helmet())
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  useRoutes(): void {
    this.app.use('/tasks', this.taskController.router)
  }

  useExceptionFilters() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(`[500]: ${err.message}`)
        res.status(500).json({
          message: err.message || 'Server Error'
        })
      }
    )
    this.app.use('*', (req, res) =>
      res.status(404).json({ message: 'Page not found' })
    )
  }

  public async init(): Promise<void> {
    this.useMiddleware()
    this.useRoutes()
    this.useExceptionFilters()
    this.server = this.app.listen(PORT, () => {
      console.log(`Server works on port ${PORT}`)
    })
  }

  public close(): void {
    this.server.close()
  }
}
