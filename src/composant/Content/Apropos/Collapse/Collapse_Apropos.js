import collapse from './collapse.module.scss'
import React, { useState } from 'react'
import fleche from '../../../../assets/images/fleche.svg'

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false)

  function FlecheClose() {
    if (open === false) {
      return (
        <div>
          <img
            src={fleche}
            alt={`cliquer pour lire ${titre}`}
            className={collapse.fa_solid}
          />
        </div>
      )
    }
  }

  function FlecheOpen() {
    if (open === true) {
      return (
        <div>
          <img
            src={fleche}
            alt={`fermer ${titre}`}
            className={collapse.fatrue}
          />
        </div>
      )
    }
  }

  return (
    <section className={collapse.divCollapse}>
      <div className={collapse.collapseClose}>
        <h2 className={collapse.titreh2}>{titre}</h2>
        <a
          className={collapse.hrefClos}
          href={`#${titre}/`}
          onClick={() => setOpen(!open)}
        >
          <FlecheClose />
        </a>
      </div>
      {open && (
        <div className={collapse.annonces}>
          <a
            className={collapse.hrefOpen}
            href={`#${titre}`}
            onClick={() => setOpen(!open)}
          >
            <FlecheOpen />
          </a>
          <div className={collapse.description}>{description}</div>
        </div>
      )}
    </section>
  )
}

export default Collapse
