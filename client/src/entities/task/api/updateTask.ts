import { request } from '../../../shared'
import { ITask } from '../types'

export const updateTask = async (
  id: string,
  data: Partial<Omit<ITask, 'id'>>
) => {
  const res = await request.patch(`/tasks/${id}`, data)

  return res.data
}
