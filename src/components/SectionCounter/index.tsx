import styles from './index.module.css'

export const SectionCounter = ({ counter }: { counter: string }) => {
  return <p className={styles.counter}>{counter}</p>
}
