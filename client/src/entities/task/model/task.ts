import { create } from 'zustand'
import { fetchTasks } from '../api/fetchTasks'
import { ITask } from '../types'
import { createTask } from '../api/createTask'
import { updateTask } from '../api/updateTask'
import { deleteTask } from '../api/deleteTask'

interface ITasksState {
  tasks: ITask[]
  createTask: (data: Omit<ITask, 'id' | 'completed'>) => void
  fetchTasks: () => void
  updateTask: (id: string, data: Partial<Omit<ITask, 'id'>>) => void
  deleteTask: (id: string) => void
}

export const useTaskStore = create<ITasksState>((set) => ({
  tasks: [],
  createTask: async (data: Omit<ITask, 'id' | 'completed'>) => {
    const response = await createTask(data)
    set((state) => ({ tasks: [...state.tasks, response] }))
  },
  fetchTasks: async () => {
    const response = await fetchTasks()
    set({ tasks: response })
  },
  updateTask: async (id: string, data: Partial<Omit<ITask, 'id'>>) => {
    const response = await updateTask(id, data)
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...response } : task
      )
    }))
  },
  deleteTask: async (id: string) => {
    const response = await deleteTask(id)
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id)
    }))
  }
}))
