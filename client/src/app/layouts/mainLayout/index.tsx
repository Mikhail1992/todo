import styles from './index.module.css'
interface IProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>
}
