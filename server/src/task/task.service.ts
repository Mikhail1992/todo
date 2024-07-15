import { ITask } from '../types/task'
import ITaskRepository from './task.repository.interface'
import ITaskService from './task.service.interface'

export default class TaskService implements ITaskService {
  taskRepository: ITaskRepository
  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository
  }

  create(task: Omit<ITask, 'id'>): Promise<ITask> {
    return this.taskRepository.create(task)
  }

  findAll(): Promise<ITask[]> {
    return this.taskRepository.findAll()
  }

  update(id: string, data: Omit<Partial<ITask>, 'id'>): Promise<ITask> {
    return this.taskRepository.update(id, data)
  }

  delete(id: string): Promise<void> {
    return this.taskRepository.delete(id)
  }
}
