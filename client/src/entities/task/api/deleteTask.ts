import { request } from '../../../shared'

export const deleteTask = async (id: string) => {
  const res = await request.delete(`/tasks/${id}`)

  return res.data
}
