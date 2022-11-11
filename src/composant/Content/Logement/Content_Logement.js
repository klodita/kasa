import styles from '../../../composant/Content/content.module.scss'
import { logement } from '../../../assets/API/Logement'
import { useParams } from 'react-router-dom'
import Slideshow from './Content_Gallery'

function Logement() {
  const id = useParams()
  const logementIndiv = logement.find((logement) => logement.id === id.id)

  return (
    <main className={styles.content}>
      <Slideshow />
      <div>
        <h1>{logementIndiv.title}</h1>
        <p>{logementIndiv.location}</p>
      </div>
    </main>
  )
}

export default Logement
