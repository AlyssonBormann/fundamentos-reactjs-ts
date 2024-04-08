import iginiteLogo from '../assets/ignite-logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={iginiteLogo} alt="Logotipo do ignite" />
    </header>

  )
}