import styles from '../../../composant/Content/content.module.scss'
import logeStyle from './logement.module.scss'
import Tag from './Tag/Tag'
import Etoiles from './Etoiles/Etoiles'
import CollapseLog from './Collapse_Log/Collapse'
import { logement } from '../../../assets/API/Logement'
import { useParams } from 'react-router-dom'
import Gallery from './Gallery/Content_Gallery'
import Erreur from '../../../pages/Erreur'

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
    <>
      {logementIndiv ? (
        <main className={styles.content}>
          <Gallery />
          <div className={logeStyle.Divpresentation}>
            <div className={logeStyle.presentation1}>
              <h1 className={logeStyle.titre}>{logementIndiv.title}</h1>
              <h2 className={logeStyle.sousTitre}>{logementIndiv.location}</h2>
            </div>
          </div>

          <div className={logeStyle.Divtag}>
            <span className={logeStyle.tags}>
              <Tag />
            </span>
          </div>

          <div className={logeStyle.DivHostEtoile}>
            <div className={logeStyle.presentation2}>
              <h3 className={logeStyle.hostName}>{logementIndiv.host.name}</h3>
              <img
                className={logeStyle.host}
                src={logementIndiv.host.picture}
                alt={logementIndiv.host.name}
              />
            </div>
            <div className={logeStyle.DivEtoile}>
              <span>
                <Etoiles />
              </span>
            </div>
          </div>

          <div className={logeStyle.DivCollapse}>
            <div className={logeStyle.DivCollapse1}>
              <div className={logeStyle.Descri}>
                <CollapseLog
                  titre="Description"
                  description={logementIndiv.description}
                />
              </div>
            </div>

            <div className={logeStyle.DivCollapse2}>
              <div className={logeStyle.Equip}>
                <CollapseLog titre="Equipements" description={<Equipmt />} />
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Erreur />
      )}
    </>
  )
}

export default Logement
