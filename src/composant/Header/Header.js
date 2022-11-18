import styles from './header.module.scss'
import logo from '../../assets/images/Logo_Header.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo Kasa" />
      </div>

      <nav className={styles.navigation}>
        <ul>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? styles.accueilActive : styles.accueil
            }
          >
            Accueil
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive ? styles.aproposActive : styles.apropos
            }
          >
            A Propos
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
