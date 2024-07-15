import { useState } from 'react'
import { Button, Checkbox } from '../../../../shared'
import { ITask } from '../../types'
import styles from './index.module.css'
import { InputForm } from '../inputForm'

interface IProps extends ITask {
  checked: boolean
  deleteTask: (id: string) => void
  toggleComplete: (id: string, completed: boolean) => void
  updateTask: (id: string, data: Partial<Omit<ITask, 'id'>>) => void
}

export const Task = ({
  id,
  title,
  completed,
  toggleComplete,
  deleteTask,
  updateTask
}: IProps) => {
  return (
    <div className={styles.container}>
      <Checkbox id={id} checked={completed} toggleComplete={toggleComplete} />
      <p>{title}</p>
      <div className={styles.button}>
        <InputForm
          position='right'
          label='Edit'
          title={title}
          onClick={(title: string) => updateTask(id, { title })}
        />
      </div>
      <Button onClick={() => deleteTask(id)}>Delete</Button>
    </div>
  )
}
