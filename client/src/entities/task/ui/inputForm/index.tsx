import { useState } from 'react'
import { Button } from '../../../../shared'
import cn from 'classnames'
import styles from './index.module.css'

interface IProps {
  label: string
  title: string
  position: 'left' | 'right'
  onClick(value: string): void
}
export const InputForm = ({
  label,
  position = 'left',
  title = '',
  onClick
}: IProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(title)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleToggleForm = () => {
    setOpen((prev) => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onClick(value)
    setValue('')
    setOpen(false)
  }

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <Button onClick={handleToggleForm}>{label}</Button>
      {open && (
        <form
          className={cn(styles.form, {
            [styles.left]: position === 'left',
            [styles.right]: position === 'right'
          })}
        >
          <input value={value} onChange={handleChange} autoFocus />
          <Button>Submit</Button>
        </form>
      )}
    </div>
  )
}
