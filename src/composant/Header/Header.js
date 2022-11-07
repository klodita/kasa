import styles from './header.module.scss'
import logo from '../../assets/images/Logo_Header.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo Kasa" />
      </div>

      <div className={styles.navigation}>
        <a href="/home" className={styles.accueil}>
          {' '}
          Accueil
        </a>
        <a href="/apropos" className={styles.apropos}>
          {' '}
          A Propos
        </a>
      </div>
    </header>
  )
}

export default Header
