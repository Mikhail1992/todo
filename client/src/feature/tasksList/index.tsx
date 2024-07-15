import { useEffect } from 'react'
import { ITask, Task, useTaskStore } from '../../entities/task'
import cn from 'classnames'
import { InputForm } from '../../entities/task'
import styles from './index.module.css'

export const TasksList = () => {
  const tasksStore = useTaskStore()

  useEffect(() => {
    tasksStore.fetchTasks()
  }, [])

  const toggleComplete = (id, completed) => {
    tasksStore.updateTask(id, { completed: !completed })
  }

  const handleDelete = (id: string) => {
    tasksStore.deleteTask(id)
  }

  const handleCreateNewTask = (title: string) => {
    tasksStore.createTask({ title })
  }

  const handleUpdateTask = (id, data: Partial<Omit<ITask, 'id'>>) => {
    tasksStore.updateTask(id, data)
  }

  if (!tasksStore.tasks.length) {
    return (
      <>
        <div className={styles.container}>List is empty</div>
        <InputForm label='Add+' onClick={handleCreateNewTask} />
      </>
    )
  }

  return (
    <>
      <ul className={styles.container}>
        {tasksStore.tasks.map((task) => (
          <li
            key={task.id}
            className={cn(styles.item, {
              [styles.itemChecked]: task.completed
            })}
          >
            <Task
              id={task.id}
              title={task.title}
              completed={task.completed}
              deleteTask={handleDelete}
              toggleComplete={toggleComplete}
              updateTask={handleUpdateTask}
            />
          </li>
        ))}
      </ul>
      <InputForm label='Add+' onClick={handleCreateNewTask} />
    </>
  )
}
