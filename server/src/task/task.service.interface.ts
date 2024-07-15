import { ITask } from '../types/task'

export default interface ITaskService {
  create(task: Omit<ITask, 'id'>): Promise<ITask>
  findAll(): Promise<ITask[]>
  update(id: string, data: Omit<Partial<ITask>, 'id'>): Promise<ITask>
  delete(id: string): Promise<void>
}
