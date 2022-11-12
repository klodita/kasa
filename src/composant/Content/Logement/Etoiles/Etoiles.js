import styles from './etoile.module.scss'
import { logement } from '../../../../assets/API/Logement'
import { useParams } from 'react-router-dom'
import Etoile from '../../../../assets/images/etoile_gris.svg'
import Etoile2 from '../../../../assets/images/etoile_rose.svg'

function Etoiles() {
  const id = useParams()
  const logementIndiv = logement.find((logement) => logement.id === id.id)
  const rating = Number(logementIndiv.rating)

  if (rating === 0) {
    return (
      <div>
        <div className={styles.etoile}>
          <img className={styles.img} src={Etoile} alt="1 point" />
          <img className={styles.img} src={Etoile} alt="2 point" />
          <img className={styles.img} src={Etoile} alt="3 point" />
          <img className={styles.img} src={Etoile} alt="4 point" />
          <img className={styles.img} src={Etoile} alt="5 point" />
        </div>
      </div>
    )
  } else if (rating === 1) {
    return (
      <div>
        <div className={styles.etoile}>
          <img className={styles.img} src={Etoile2} alt="1 point" />
          <img className={styles.img} src={Etoile} alt="2 point" />
          <img className={styles.img} src={Etoile} alt="3 point" />
          <img className={styles.img} src={Etoile} alt="4 point" />
          <img className={styles.img} src={Etoile} alt="5 point" />
        </div>
      </div>
    )
  } else if (rating === 2) {
    return (
      <div>
        <div className={styles.etoile}>
          <img className={styles.img} src={Etoile2} alt="1 point" />
          <img className={styles.img} src={Etoile2} alt="2 point" />
          <img className={styles.img} src={Etoile} alt="3 point" />
          <img className={styles.img} src={Etoile} alt="4 point" />
          <img className={styles.img} src={Etoile} alt="5 point" />
        </div>
      </div>
    )
  } else if (rating === 3) {
    return (
      <div>
        <div className={styles.etoile}>
          <img className={styles.img} src={Etoile2} alt="1 point" />
          <img className={styles.img} src={Etoile2} alt="2 point" />
          <img className={styles.img} src={Etoile2} alt="3 point" />
          <img className={styles.img} src={Etoile} alt="4 point" />
          <img className={styles.img} src={Etoile} alt="5 point" />
        </div>
      </div>
    )
  } else if (rating === 4) {
    return (
      <div>
        <div className={styles.etoile}>
          <img className={styles.img} src={Etoile2} alt="1 point" />
          <img className={styles.img} src={Etoile2} alt="2 point" />
          <img className={styles.img} src={Etoile2} alt="3 point" />
          <img className={styles.img} src={Etoile2} alt="4 point" />
          <img className={styles.img} src={Etoile} alt="5 point" />
        </div>
      </div>
    )
  } else if (rating === 5) {
    return (
      <div>
        <div className={styles.etoile}>
          <img className={styles.img} src={Etoile2} alt="1 point" />
          <img className={styles.img} src={Etoile2} alt="2 point" />
          <img className={styles.img} src={Etoile2} alt="3 point" />
          <img className={styles.img} src={Etoile2} alt="4 point" />
          <img className={styles.img} src={Etoile2} alt="5 point" />
        </div>
      </div>
    )
  }
}

export default Etoiles
