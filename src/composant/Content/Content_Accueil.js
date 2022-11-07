import styles from '../../composant/Content/content.module.scss'
import image from '../../assets/images/header_AccueilDeskop.png'

function Content() {
  return (
    <main className={styles.content}>
      <div className={styles.imgHeader}>
        <img src={image} alt="la mer à la campagne" />
        <h1 className={styles.paratext}>Chez vous, partout et ailleurs</h1>
      </div>

      <div className={styles.location}>
        <div className={styles.cartLocation}>
          <div className={styles.cart}>
            <p>Titre de la location</p>
          </div>

          <div className={styles.cart}>
            <p>Titre de la location</p>
          </div>

          <div className={styles.cart}>
            <p>Titre de la location</p>
          </div>
        </div>

        <div className={styles.cartLocation}>
          <div className={styles.cart}>
            <p>Titre de la location</p>
          </div>

          <div className={styles.cart}>
            <p>Titre de la location</p>
          </div>

          <div className={styles.cart}>
            <p>Titre de la location</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Content
