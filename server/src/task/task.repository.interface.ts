import { ITask } from '../types/task'

export default interface ITaskRepository {
  create(task: Omit<ITask, 'id'>): Promise<ITask>
  find(id: string): Promise<ITask>
  findAll(): Promise<ITask[]>
  update(id: string, data: Omit<Partial<ITask>, 'id'>): Promise<ITask>
  delete(id: string): Promise<void>
}
