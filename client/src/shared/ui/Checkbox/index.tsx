import styles from './index.module.css'

interface IProps {
  id: string
  checked: boolean
  toggleComplete: (id: string, completed: boolean) => void
}

export const Checkbox = ({ id, checked = false, toggleComplete }: IProps) => {
  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        type='checkbox'
        onChange={() => toggleComplete(id, checked)}
        checked={checked}
      />
      <span />
    </label>
  )
}
