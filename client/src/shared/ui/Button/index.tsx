import styles from './index.module.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, onClick }: IProps) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  )
}
