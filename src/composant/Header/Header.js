import styles from './header.module.scss'
import logo from '../../assets/images/Logo_Header.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo Kasa" />
      </div>

      <nav className={styles.navigation}>
        <ul>
          <a href="/home" className={styles.accueil}>
            Accueil
          </a>
        </ul>
        <ul>
          <a href="/apropos" className={styles.apropos}>
            A Propos
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
