import App from './app'
import TaskController from './task/task.controller'
import TaskRepository from './task/task.repository'
import TaskService from './task/task.service'
import InMemoryCache from './utils/memory-cache'

const bootstrap = () => {
  const app = new App(
    new TaskController(new TaskService(new TaskRepository(new InMemoryCache())))
  )
  app.init()

  return { app }
}

export const { app } = bootstrap()

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.')
  console.log('Closing http server.')
  app.close()
})
