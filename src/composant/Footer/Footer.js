import styles from '../Footer/footer.module.scss'
import logo from '../../assets/images/Logo_Footer.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <img src={logo} alt="logo Kasa" />
        <h3 className={styles.paratext}> © 2020 Kasa. All rights reserved </h3>
      </div>
    </footer>
  )
}

export default Footer
