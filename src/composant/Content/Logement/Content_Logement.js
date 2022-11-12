import styles from '../../../composant/Content/content.module.scss'
import logeStyle from './logement.module.scss'
import collapseStyle from './Collapse_Log/collapse.module.scss'
import Tag from './Tag/Tag'
import Etoiles from './Etoiles/Etoiles'
import CollapseLog from './Collapse_Log/Collapse'
import { logement } from '../../../assets/API/Logement'
import { useParams } from 'react-router-dom'
import Slideshow from './Gallery/Content_Gallery'

function Logement() {
  const id = useParams()
  const logementIndiv = logement.find((logement) => logement.id === id.id)

  function Equipmt() {
    return (
      <div>
        {logementIndiv.equipments.map((info, index) => (
          <div key={index}>{info}</div>
        ))}
      </div>
    )
  }

  return (
    <main className={styles.content}>
      <Slideshow />
      <div className={logeStyle.Divpresentation}>
        <div className={logeStyle.presentation1}>
          <h1 className={logeStyle.titre}>{logementIndiv.title}</h1>
          <h2 className={logeStyle.sousTitre}>{logementIndiv.location}</h2>
        </div>

        <div className={logeStyle.presentation2}>
          <h3 className={logeStyle.hostName}>{logementIndiv.host.name}</h3>
          <img
            className={logeStyle.host}
            src={logementIndiv.host.picture}
            alt={logementIndiv.host.name}
          />
        </div>
      </div>

      <div className={logeStyle.Divtag}>
        <span className={logeStyle.tags}>
          <Tag />
        </span>
      </div>

      <div className={logeStyle.DivEtoile}>
        <span>
          <Etoiles />
        </span>
      </div>

      <div className={logeStyle.DivCollapse}>
        <div className={collapseStyle.Descri}>
          <CollapseLog
            titre="Description"
            description={logementIndiv.description}
          />
        </div>
        <div className={collapseStyle.Equip}>
          <CollapseLog
            titre="Equipements"
            description={<Equipmt />}
            className={logeStyle.ess}
          />
        </div>
      </div>
    </main>
  )
}

export default Logement
