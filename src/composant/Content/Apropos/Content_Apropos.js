import styles from '../../../composant/Content/content.module.scss'
import collapse from '../Apropos/collapse.module.scss'
import image from '../../../assets/images/header_AproposDesktop.png'
import fleche from '../../../assets/images/fleche.svg'
import React, { useState } from 'react'

export function DivOpen({ titre, description }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={collapse.divCollapse}>
      <div className={collapse.collapseClose}>
        <h2 className={collapse.titreh2}>{titre}</h2>
        <a href={`#${titre}/`} onClick={() => setOpen(!open)}>
          <img
            src={fleche}
            alt={`cliquer pour lire ${titre}`}
            className={collapse.fa_solid}
          />
        </a>
      </div>
      {open && (
        <div className={collapse.annonces}>
          <a
            className={collapse.test}
            href={`#${titre}`}
            onClick={() => setOpen(!open)}
          >
            <img
              src={fleche}
              alt={`fermer ${titre}`}
              className={collapse.fatrue}
            />
          </a>
          <div className={collapse.description}>{description}</div>
        </div>
      )}
    </div>
  )
}

function ContentApropos() {
  return (
    <main className={styles.content}>
      <div className={styles.imgHeader}>
        <img src={image} alt="Montagne eneigée" />
      </div>

      <div>
        <DivOpen
          titre="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <DivOpen
          titre="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <DivOpen
          titre="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <DivOpen
          titre="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </main>
  )
}

export default ContentApropos
