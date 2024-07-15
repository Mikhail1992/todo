import { Request, Response, NextFunction, Router } from 'express'

export default interface ITaskController {
  router: Router
  create(req: Request, res: Response, next: NextFunction): void
  findAll(req: Request, res: Response, next: NextFunction): void
  update(req: Request, res: Response, next: NextFunction): void
  delete(req: Request, res: Response, next: NextFunction): void
}
