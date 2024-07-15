import { Router, Response, Request } from 'express'
import IController from './controller.interface'

export default abstract class BaseController {
  private readonly _router: Router

  constructor() {
    this._router = Router()
  }

  get router(): Router {
    return this._router
  }

  public send<T>(res: Response, code: number, message?: T): Response {
    if (message) {
      res.type('application/json')
      return res.status(code).json(message)
    }
    return res.status(code).send()
  }

  public ok<T>(res: Response, message?: T): Response {
    return this.send<T>(res, 200, message)
  }

  public created(res: Response): Response {
    return res.sendStatus(201)
  }

  protected bindRoutes(routes: Array<IController>): void {
    routes.forEach(({ path, func, method }) => {
      const handler = func.bind(this)
      this._router[method](path, handler)
    })
  }
}
