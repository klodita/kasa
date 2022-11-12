import collapse from '../Collapse_Log/collapse.module.scss'
import React, { useState } from 'react'
import fleche from '../../../../assets/images/fleche.svg'

function CollapseLog({ titre, description }) {
  const [open, setOpen] = useState(false)

  function FlecheClose() {
    if (open === false) {
      return (
        <div>
          <a
            className={collapse.hrefClose}
            href={`#${titre}/`}
            onClick={() => setOpen(!open)}
          >
            <img
              src={fleche}
              alt={`cliquer pour lire ${titre}`}
              className={collapse.fa_solid}
            />
          </a>
        </div>
      )
    }
  }

  function FlehcheOpen() {
    if (open === true) {
      return (
        <div>
          <a
            className={collapse.hrefOpen}
            href={`#${titre}`}
            onClick={() => setOpen(!open)}
          >
            <img
              src={fleche}
              alt={`fermer ${titre}`}
              className={collapse.fatrue}
            />
          </a>
        </div>
      )
    }
  }

  return (
    <div className={collapse.divCollapse}>
      <div className={collapse.collapseClose}>
        <h2 className={collapse.titreh2}>{titre}</h2>
        <FlecheClose />
      </div>
      {open && (
        <div className={collapse.annonces}>
          <FlehcheOpen />
          <div className={collapse.description}>{description}</div>
        </div>
      )}
    </div>
  )
}

export default CollapseLog
