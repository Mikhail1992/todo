import { request } from '../../../shared'

export const fetchTasks = async () => {
  const res = await request.get('/tasks')

  return res.data
}
