import React, { useState } from 'react'
import { logement } from '../../../../assets/API/Logement'
import { useParams } from 'react-router-dom'
import gallery from './gallery.module.scss'

function Gallery(props) {
  const [current, setCurrent] = useState(0)

  const id = useParams()
  const logementIndiv = logement.find((logement) => logement.id === id.id)
  const images = logementIndiv.pictures.length

  const handleDroit = () => {
    setCurrent(current === images - 1 ? 0 : current + 1)
  }

  const handleGauche = () => {
    setCurrent(current === 0 ? images - 1 : current - 1)
  }

  return (
    <section>
      {logementIndiv.pictures.map((pictures, index) => (
        <div className={index === current ? 'active' : ''} key={index}>
          {index === current && (
            <>
              <img
                className={gallery.pictures}
                key={index}
                src={pictures}
                alt="gallery logement sur paris"
              ></img>

              <div className={gallery.numero}>
                {index + 1}/{images}
              </div>
            </>
          )}
        </div>
      ))}

      {images > 1 && (
        <>
          <svg
            className={gallery.flecheGauche}
            onClick={handleGauche}
            width="96"
            height="120"
            viewBox="0 0 96 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
              fill="white"
            />
          </svg>

          <svg
            className={gallery.flecheDroite}
            onClick={handleDroit}
            width="96"
            height="121"
            viewBox="0 0 96 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
              fill="white"
            />
          </svg>
        </>
      )}
    </section>
  )
}
export default Gallery
