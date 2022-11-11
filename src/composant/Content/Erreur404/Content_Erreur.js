import styles from '../../../composant/Content/content.module.scss'
import erreur from '../Erreur404/erreur.module.scss'
import image from '../../../assets/images/erreur_404.png'

function ContentErreur() {
  return (
    <main className={styles.content}>
      <div className={erreur.divErreur}>
        <img src={image} alt="erreur 404" className={erreur.erreur} />
        <div className={erreur.titreErreur}>
          <h1> Oups! La page que vous demandez n'existe pas. </h1>
          <a href="/home">Retourner sur la page d’accueil</a>
        </div>
      </div>
    </main>
  )
}

export default ContentErreur
