import { v4 as uuidv4 } from 'uuid'
import { ITask } from '../types/task'
import { IMemoryCache } from '../utils/memory-cache.interface'
import ITaskRepository from './task.repository.interface'

export default class TaskRepository implements ITaskRepository {
  inMemoryCache: IMemoryCache<ITask>
  constructor(inMemoryCache: IMemoryCache<ITask>) {
    this.inMemoryCache = inMemoryCache
  }

  async create(task: Omit<ITask, 'id'>) {
    const id = uuidv4()
    const result = { id, ...task }
    this.inMemoryCache.setItem(id, result)
    return result
  }

  async find(id: string) {
    const result = this.inMemoryCache.getItem(id)
    if (!result) {
      throw new Error(`${id} does not exist`)
    }
    return result
  }

  async findAll() {
    return this.inMemoryCache.getAll()
  }

  async update(id: string, data: Omit<Partial<ITask>, 'id'>) {
    const task = this.inMemoryCache.getItem(id)

    if (!task) {
      throw new Error(`${id} does not exist`)
    }

    const result = { ...task, ...data }
    this.inMemoryCache.setItem(id, result)
    return result
  }

  async delete(id: string) {
    return this.inMemoryCache.removeItem(id)
  }
}
