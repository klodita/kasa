import styles from './tag.module.scss'
import { logement } from '../../../../assets/API/Logement'
import { useParams } from 'react-router-dom'

function Tag() {
  const id = useParams()
  const tag = logement.find((logement) => logement.id === id.id)

  return (
    <div className={styles.ess}>
      {tag.tags.map((info, index) => (
        <div className={styles.tags} key={index}>
          <div>{info}</div>
        </div>
      ))}
    </div>
  )
}

export default Tag
