import { request } from '../../../shared'
import { ITask } from '../types'

export const createTask = async (task: Omit<ITask, 'id' | 'completed'>) => {
  const res = await request.post('/tasks', task)

  return res.data
}
