import styles from '../../../composant/Content/content.module.scss'
import cart from './cart.module.scss'
import image from '../../../assets/images/header_AccueilDeskop.png'
import img from '../../../assets/images/header_AccueilMobile.png'
import { NavLink } from 'react-router-dom'
import { logement } from '../../../assets/API/Logement.js'

export function Logement({ image, titre, id }) {
  return (
    <div className={cart.cart} id={id}>
      <img src={image} alt={`Ile-de-France ${titre}`} className={cart.cover} />
      <div className={cart.flou}>
        <h2 className={cart.paratext}>{titre}</h2>
      </div>
    </div>
  )
}

function Content() {
  const location = logement
  return (
    <main className={styles.content}>
      <div className={styles.imgHeader}>
        <img
          src={image}
          alt="la mer à la campagne"
          className={styles.HeaderDesk}
        />
        <img
          src={img}
          alt="la mer à la campagne"
          className={styles.HeaderMob}
        />

        <h1 className={styles.titre}>Chez vous, partout et ailleurs</h1>
      </div>
      <div className={cart.location}>
        <div className={cart.cartLocation}>
          {location.map((l) => (
            <NavLink key={l.id} to={'/logement/' + l.id}>
              <Logement image={l.cover} titre={l.title} key={l.id} />
            </NavLink>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Content
